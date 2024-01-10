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
            {id:1, title:'Article Title', 
            description:'Description of article',
            img: 'https://happycoin.club/wp-content/uploads/2023/06/geri-gensler-sec.jpg',
            rating: 5},

            {id:2, title:'Article Title', 
            description:'Second description of article',
            img: 'https://happycoin.club/wp-content/uploads/2023/06/geri-gensler-sec.jpg',
            rating: 5},

            {id:3, title:'Article Title', 
            description:'Third description of article',
            img: 'https://happycoin.club/wp-content/uploads/2023/06/geri-gensler-sec.jpg',
            rating: 5},

            {id:4, title:'Article Title', 
            description:'Fourth description of article',
            img: 'https://happycoin.club/wp-content/uploads/2023/06/geri-gensler-sec.jpg',
            rating: 5},

            {id:5, title:'Article Title', 
            description:'Fifth description of article',
            img: 'https://happycoin.club/wp-content/uploads/2023/06/geri-gensler-sec.jpg',
            rating: 5},
        ]
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

}