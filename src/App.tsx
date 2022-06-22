import React, {Suspense, useEffect} from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {Route, Router, Routes} from "react-router-dom";
import {ActionTypes} from "./redux/store";
import UserContainer from "./Components/Users/UserContainer";
import ProfileContainers from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import {useDispatch, useSelector} from "react-redux";
import {GlobalStateType} from "./redux/redux-store";
import {initializedAppTC} from "./redux/app-reducer";
import Preloader from "./Components/Preloader/Preloader";
import { lazy } from 'react';


const News = lazy(() => import("./Components/News/News"))

type AppPropsType = {
    dispatch: (action: ActionTypes) => void
    store: any
}

const App = (props: AppPropsType) => {

    const dispatch = useDispatch()

    const isAuth = useSelector<GlobalStateType, boolean>(state => state.auth.isAuth)

    const initialized = useSelector<GlobalStateType>(state => state.app.initialized)

    useEffect(() => {
        dispatch(initializedAppTC())
    }, [])

    if (!initialized) {
        return <div className={"preloader"}><Preloader/></div>
    }

    if (!isAuth) {
        return <div className={"container"}><Login/></div>
    }

    return (
        <div className={"app-wrapper"}>

            <div>
                <HeaderContainer/>

                <div className={"container"}>
                    <Navbar state={props.store.getState().sideBarFriends}/>

                    <div className={'mainContent'}>

                        <Routes>
                            <Route path={'/dialogs/'} element={<DialogsContainer/>}/>
                            <Route path={'/dialogs/:dialogID'} element={<DialogsContainer/>}/>
                            <Route path={'/users/'} element={<UserContainer/>}/>
                            <Route path={'/profile/:userID'} element={<ProfileContainers/>}/>
                            <Route path={'/'} element={<ProfileContainers/>}/>
                            <Route path={'/profile/'} element={<ProfileContainers/>}/>
                            <Route path={'/login/'} element={<Login/>}/>
                            <Route path={'/news/'} element={<Suspense fallback={<Preloader/>}><News/></Suspense>}/>
                        </Routes>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default App;
