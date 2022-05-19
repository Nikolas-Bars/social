import {ActionTypes, AuthStateType, DialogsPageType} from "./store";
import icon2 from "../img/iconsForDialogs/icon2.jpg";
import icon3 from "../img/iconsForDialogs/icon3.jpg";
import icon4 from "../img/iconsForDialogs/icon4.jpg";
import icon5 from "../img/iconsForDialogs/icon5.jpg";
import {Dispatch} from "redux";
import {authAPI, usersAPI} from "../Api/api";
import {toggleFollow, toggleFollowingProgress} from "./userReducer";
import {stopSubmit} from "redux-form";

const SET_AUTH_DATA = 'SET_AUTH_DATA'


let initialState: AuthStateType = {
    id: null,
    email: '',
    login: '',
    isAuth: false // - залогинены мы или нет
}


const authReducer = (state: AuthStateType = initialState, action: ActionTypes): AuthStateType => {

    switch (action.type) {
        case "SET_AUTH_DATA":

            return {
                ...state,
                ...action.data,
            }
        default:
            return state

    }
}


export const setAuthUserDataAC = (id: number, email: string, login: string, isAuth: boolean) => ({type: SET_AUTH_DATA, data: {id, email, login, isAuth}}) as const



export const getAuthUserDataTC = () => (dispatch: Dispatch)=>{
    return authAPI.me().then(response => {
        if(response.resultCode === 0){
            let {id, email, login} = response.data
            dispatch(setAuthUserDataAC(id, email, login, true))
        }
    })
}





export const loginTC =(email: string, password: string, rememberMe: boolean)=> (dispatch: Dispatch<any>)=>{
    authAPI.login(email, password, rememberMe).then(res=> {
        if(res.data.resultCode === 0){
            dispatch(getAuthUserDataTC())
        }else {
            debugger
            let message = res.data.messages.length > 0 ? res.data.messages[0] : 'Some Error'
            dispatch(stopSubmit('LoginForm', {_error: message}))   // первым параметром передаем имя формы, вторым имя поля и текст который будет при ошибке
        }
    })
}

export const logout =()=> (dispatch: Dispatch)=> {
    authAPI.logout().then(res => {
        if(res.data.resultCode === 0) {
            // @ts-ignore
            dispatch(setAuthUserDataAC(null, null, null, false))
        }
    })
}


export default authReducer