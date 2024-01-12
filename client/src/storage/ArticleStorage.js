import{makeAutoObservable} from "mobx";

export default class ArticleStorage{
    constructor(){
        this._categories = [
            {id:1, name:'Экономика'},
            {id:2, name:'Обзор'},
            {id:3, name:'Инсайд'},
            {id:4, name:'Интервью'},
            {id:5, name:'История'}
        ]
        this._coins = [
            {id:1, name:'Bitcoin'},
            {id:2, name:'Etherium'},
            {id:3, name:'Solana'},
            {id:4, name:'Toncoin'},
            {id:5, name:'Dogecoin'}
        ]
        this._articles = [
            {id:1, title:'Article1', 
            description:'Description of article',
            img: 'https://happycoin.club/wp-content/uploads/2023/06/geri-gensler-sec.jpg',
            rating: 5},

            {id:2, title:'Article2', 
            description:'Second description of article',
            img: 'https://happycoin.club/wp-content/uploads/2023/06/geri-gensler-sec.jpg',
            rating: 5},

            {id:3, title:'Article3', 
            description:'Third description of article',
            img: 'https://happycoin.club/wp-content/uploads/2023/06/geri-gensler-sec.jpg',
            rating: 5},

            {id:4, title:'Article4e', 
            description:'Fourth description of article',
            img: 'https://happycoin.club/wp-content/uploads/2023/06/geri-gensler-sec.jpg',
            rating: 5},

            {id:5, title:'Article5', 
            description:'Fifth description of article',
            img: 'https://happycoin.club/wp-content/uploads/2023/06/geri-gensler-sec.jpg',
            rating: 5},
        ]

        this._articlesInfo = [
            {id:1, 
            content:'Content is not a description of article Content is not a description of article Article1 Content is not a description of article Article1 Article1',
            },
            {id:2, 
                content:'Content is not a description of article Article2 Content is not a description of article Content is not a description of article Article2 ',
                },
        ]
        this._selectedCategory = {}
        this._selectedCoin = {}

        makeAutoObservable(this)
    }

//Actions
    setCategories(categories){
        this._categories = categories
    }

    setCoin(coins){
        this._coins = coins
    }

    setArticles(articles){
        this._articles = articles
    }

    setSelectedCategory(category){
        this._selectedCategory = category
    }

    setSelectedCoin(coin){
        this._selectedCoin = coin
    }


//State getters
    get categories(){
        return this._categories
    }

    get coins(){
        return this._coins
    }

    get articles(){
        return this._articles
    }

    get selectedCategory(){
        return this._selectedCategory
    }


    get selectedCoin(){
        return this._selectedCoin
    }
}