import {initialize} from "redux-form";
import {Dispatch} from "redux";
import {getAuthUserDataTC} from "./auth-reducer";

type StateType = {
    initialized: boolean
}

const initialState = {
    initialized: false
}

export const AppReducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case "INITIALIZED-SUCCESS":
            return {...state, initialized: true}
        default: {
            return state
        }
    }
}

type ActionType = ReturnType<typeof initializedAppAC>

export const initializedAppAC = () => ({type: 'INITIALIZED-SUCCESS'})as const

export const initializedAppTC =()=>(dispatch: any)=>{
    let promise = dispatch(getAuthUserDataTC()) // оказывается диспатч в данном случае вернет промис. Но нужно прописать return в getAuthUserDataTC
    promise.then(()=>{
        dispatch(initializedAppAC())
    })
}