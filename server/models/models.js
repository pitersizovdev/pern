const sequelize = require('../db')
const {DataTypes, INTEGER} = require('sequelize')

const User = sequelize.define('user',{
        id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
        email:{type:DataTypes.STRING, unique:true},
        password:{type:DataTypes.STRING},
        role:{type:DataTypes.STRING, defaultValue:"USER"},
    })

const Article = sequelize.define('article',{
        id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
        title:{type:DataTypes.STRING, unique:true},
        description:{type:DataTypes.STRING, unique:true},
        img:{type:DataTypes.STRING, allowNull: false},
        rating:{type:DataTypes.INTEGER, defaultValue:0}
    })

const Category = sequelize.define('category',{
        id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
        name: {type:DataTypes.STRING, unique:true, allowNull:false}
    })

const Coin = sequelize.define('coin',{
        id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
        name: {type:DataTypes.STRING, unique:true, allowNull:false}
    })

const ArticleInfo = sequelize.define('article_info',{
        id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
        content: {type:DataTypes.STRING, allowNull:false}
    })

const Rating = sequelize.define('rating',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    rate:{type:DataTypes.INTEGER, allowNull:false}
}

)

Category.hasMany(Article)
Article.belongsTo(Category)

Coin.hasMany(Article)
Article.belongsTo(Coin)


Article.hasMany(ArticleInfo, {as: 'info'});
ArticleInfo.belongsTo(Article)

User.hasMany(Rating)
Rating.belongsTo(User)

Article.hasMany(Rating)
Rating.belongsTo(Article)

module.exports = {
    User,
    Article,
    Category,
    Coin,
    ArticleInfo,
    Rating
}













