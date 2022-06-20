import {createStoreHook} from "react-redux";
import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import userReducer from "./userReducer";
import authReducer from "./auth-reducer";
import thunkApplyMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import {AppReducer} from "./app-reducer";


let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sideBarFriends: sidebarReducer,
    usersPage: userReducer,
    auth: authReducer,
    form: formReducer,
    app: AppReducer,
})

export type GlobalStateType = ReturnType<typeof reducers>

let store = createStore(reducers, applyMiddleware(thunkApplyMiddleware))




// @ts-ignore
window.store = store

export default store