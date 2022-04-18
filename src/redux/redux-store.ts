import {createStoreHook} from "react-redux";
import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import userReducer from "./userReducer";
import authReducer from "./auth-reducer";



let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sideBarFriends: sidebarReducer,
    usersPage: userReducer,
    auth: authReducer,
})

export type GlobalStateType = ReturnType<typeof reducers>

let store = createStore(reducers)


// @ts-ignore
window.store = store

export default store