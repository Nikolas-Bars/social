import {ActionTypes, AuthStateType, DialogsPageType} from "./store";
import icon2 from "../img/iconsForDialogs/icon2.jpg";
import icon3 from "../img/iconsForDialogs/icon3.jpg";
import icon4 from "../img/iconsForDialogs/icon4.jpg";
import icon5 from "../img/iconsForDialogs/icon5.jpg";

const SET_AUTH_DATA = 'SET_AUTH_DATA'


let initialState: AuthStateType = {
    id: null,
    email: '',
    login: '',
    isAuth: false
}


const authReducer = (state: AuthStateType = initialState, action: ActionTypes): AuthStateType => {

    switch (action.type) {
        case "SET_AUTH_DATA":

            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state

    }
}


    export const setUserDataAC = (id: number, email: string, login: string) => ({type: SET_AUTH_DATA, data: {id, email, login}}) as const


export default authReducer