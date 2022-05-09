import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {Route, Routes, useParams} from "react-router-dom";
import {ActionTypes} from "./redux/store";
import UserContainer from "./Components/Users/UserContainer";
import ProfileContainers from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import News from "./Components/News/News";


type AppPropsType = {
    dispatch: (action: ActionTypes)=>void
    store: any
}



const App = (props: AppPropsType) => {




    return (
            <div className={"app-wrapper"}>

                <HeaderContainer/>

                <div className={"container"}>
                <Navbar state={props.store.getState().sideBarFriends}/>

                <div className={'mainContent'}>
                    <Routes>
                        <Route path={'/dialogs/'} element={<DialogsContainer />}/>
                        <Route path={'/dialogs/:dialogID'} element={<DialogsContainer />}/>
                        <Route path={'/users/'} element={<UserContainer />}/>
                        <Route path={'/profile/:userID'} element={<ProfileContainers />}/>
                        <Route path={'/profile/'} element={<ProfileContainers />}/>
                        <Route path={'/login/'} element={<Login />}/>
                        <Route path={'/news/'} element={<News />}/>
                    </Routes>

                </div>
            </div>

            </div>

    );
}

export default App;
