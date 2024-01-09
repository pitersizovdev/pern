require('dotenv').config()
const ApiError = require('../error/apiError');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Fav} = require('../models/models')


const generateJwt = (id, email, role) =>{
    return jwt.sign({id, email, role}, process.env.SECRET_KEY, {expiresIn: '24h'})
}

class UserController {
    async registration(req, res, next){
        const {email, password, role} = req.body
        if (!email || !password){
            return next(ApiError.badRequest('Incorrect email or password'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Email alrady used'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword})
        const fav = await Fav.create({userId: user.id})

        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})

    }

    async login(req, res, next){
        const {email, password}= req.body
        const user = await User.findOne({where:{email}})

        if(!user){
            return next(ApiError.internal('User not found by email'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword){
            return next(ApiError.internal('Incorrect password'))
        }

        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})

    }

    async check(req, res, next){
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})

    }

    async update(req, res, next) {
        try {
            const { id, email, role, password } = req.body;
            if (!id) {
                return next(ApiError.badRequest('ID not provided'));
            }
    
            const user = await User.findByPk(id); // Находим пользователя по его id
    
            if (!user) {
                return next(ApiError.notFound('User not found'));
            }
    
            // Можно обновить только переданные атрибуты, если они предоставлены
            if (email) {
                user.email = email;
            }
            if (role) {
                user.role = role;
            }
            if (password) {
                user.password = await bcrypt.hash(password, 5);
            }
    
            // Сохраняем обновленного пользователя в базе данных
            await user.save();
    
            return res.json({ message: 'User updated successfully' });
        } catch (err) {
            return next(ApiError.internal(err.message));
        }
    }

    async delete(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return next(ApiError.badRequest('ID not provided'));
            }
    
            const user = await User.findByPk(id); // Находим пользователя по его id
    
            if (!user) {
                return next(ApiError.notFound('User not found'));
            }
    
            // Удаляем пользователя из базы данных
            await user.destroy();
    
            return res.json({ message: 'User deleted successfully' });
        } catch (err) {
            return next(ApiError.internal(err.message));
        }
    }
}

module.exports = new UserController()