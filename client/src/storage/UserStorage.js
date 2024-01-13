import{makeAutoObservable} from "mobx";

export default class UserStorage{
    constructor(){
        this._isAuth = true
        this._user = {}
        makeAutoObservable(this)
    }
//Actions
    setIsAuth(bool){
        this._isAuth = bool
    }

    setUser(user){
        this._user = user
    }

//State getters
    get isAuth(){
        return this._isAuth
    }

    get user(){
        return this._user
    }

}