const uuid = require('uuid')
const path = require('path')
const {Article, ArticleInfo} = require('../models/models')
const ApiError = require('../error/apiError')

class ArticleController {
    async create(req, res, next){
        try {
            let {title, categoryId, coinId, description, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4()+".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const article = await Article.create({title, description, coinId, categoryId, img: fileName})

            if(info){
                info = JSON.parse(info)
                info.forEach(i=>
                    ArticleInfo.create({
                        title: i.title,
                        content: i.content,
                        articleId: article.id
                        })
                    )

            }
    
            return res.json(article)

        } catch (err){
            next(ApiError.badRequest(err.message))
        }
    }

    async getAll(req, res){
        let {categoryId, coinId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page*limit-limit
        let articles;
        if(!categoryId && !coinId){
            articles = await Article.findAndCountAll({limit, offset})
        }
        if (categoryId && !coinId){
            articles = await Article.findAndCountAll({where:{categoryId}, limit, offset})
        }
        if(!categoryId && coinId){
            articles = await Article.findAndCountAll({where:{coinId}, limit, offset})
        }
        if(categoryId && coinId){
            articles = await Article.findAndCountAll({where:{categoryId, coinId}, limit, offset})
        }
        return res.json(articles)
    }

    async getOne(req, res){
        const {id} = req.params
        const article = await Article.findOne({where: {id}, include: [{model: ArticleInfo, as: 'info'}]})
        return res.json(article)
    }


    async update(req, res, next) {
        try {
            const { id, title, categoryId, coinId, description, info } = req.body;
            if (!id) {
                return res.status(400).json({ message: 'ID не был предоставлен' });
            }
            const updatedArticle = await Article.update(
                { title, categoryId, coinId, description, info }, // Обновляемые данные
                { 
                    where: { id: id }, // Условие для обновления
                    returning: true, // Опция для возврата обновленных данных
                    plain: true // Опция для возврата обычного объекта, а не метаданных
                }
            );
            return res.json(updatedArticle);
        } catch (err) {
            next(ApiError.badRequest(err.message));
        }
    }

    async delete(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return next(ApiError.badRequest('ID not provided'));
            }
    
            const article = await Article.findByPk(id); // Находим статью по её id
    
            if (!article) {
                return next(ApiError.notFound('Article not found'));
            }
    
            // Удаляем статью из базы данных
            await article.destroy();
    
            return res.json({ message: 'Article deleted successfully' });
        } catch (err) {
            return next(ApiError.internal(err.message));
        }
    }
}



module.exports = new ArticleController()