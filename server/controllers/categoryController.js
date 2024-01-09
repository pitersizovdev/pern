const {Category} = require('../models/models')
const ApiError = require('../error/apiError')

class CategoryController {
    async create(req, res){
        const {name} = req.body
        const category = await Category.create({name})
        return res.json({category})

    }

    async getAll(req, res){
        const categories = await Category.findAll()
        return res.json(categories)
    }

    async delete(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return next(ApiError.badRequest('ID not provided'));
            }
    
            const category = await Category.findByPk(id);
    
            if (!category) {
                return next(ApiError.notFound('Category not found'));
            }
    
            await category.destroy();
    
            return res.json({ message: 'Category deleted successfully' });
        } catch (err) {
            return next(ApiError.internal(err.message));
        }
    }
}


module.exports = new CategoryController()