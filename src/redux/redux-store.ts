import {createStoreHook} from "react-redux";
import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import userReducer from "./userReducer";


let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sideBarFriends: sidebarReducer,
    usersPage: userReducer
})

let store = createStore(reducers)


// @ts-ignore
window.store = store

export default store