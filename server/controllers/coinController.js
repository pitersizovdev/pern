const {Coin} = require('../models/models')
const ApiError = require('../error/apiError')


class CoinController {
    async create(req, res){
        const {name} = req.body
        const coin = await Coin.create({name})
        return res.json({coin})

    }

    async getAll(req, res){
        const coins = await Coin.findAll()
        return res.json(coins)
    }

    async delete(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return next(ApiError.badRequest('ID not provided'));
            }
    
            const coin = await Coin.findByPk(id);
    
            if (!coin) {
                return next(ApiError.notFound('Coin not found'));
            }
    
            await coin.destroy();
    
            return res.json({ message: 'Coin deleted successfully' });
        } catch (err) {
            return next(ApiError.internal(err.message));
        }
    }
}

module.exports = new CoinController()