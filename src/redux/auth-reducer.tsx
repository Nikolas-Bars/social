import {ActionTypes, AuthStateType} from "./store";
import {Dispatch} from "redux";
import {authAPI} from "../Api/api";
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

export const setAuthUserDataAC = (id: number, email: string, login: string, isAuth: boolean) => ({
    type: SET_AUTH_DATA,
    data: {id, email, login, isAuth}
}) as const


export const getAuthUserDataTC = () => async (dispatch: Dispatch) => {
    let response = await authAPI.me()
    if (response.resultCode === 0) {
        let {id, email, login} = response.data
        dispatch(setAuthUserDataAC(id, email, login, true))
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch<any>) => {
    debugger
    const response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        debugger
        dispatch(getAuthUserDataTC())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some Error'
        dispatch(stopSubmit('LoginForm', {_error: message}))   // первым параметром передаем имя формы, вторым имя поля и текст который будет при ошибке
    }
}

export const logout = () => async (dispatch: Dispatch<any>) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserDataAC(0, '', '', false))
    }
}

export default authReducer