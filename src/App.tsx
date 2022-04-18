import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {Route, Routes, useParams} from "react-router-dom";
import {ActionTypes} from "./redux/store";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UserContainer from "./Components/Users/UserContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";


type AppPropsType = {
    dispatch: (action: ActionTypes)=>void
    store: any
}



const App = (props: AppPropsType) => {



    return (
            <div className={"app-wrapper"}>

                <HeaderContainer/>
                <Navbar state={props.store.getState().sideBarFriends}/>
                <div className={'app-wrapper-content'}>
                    <Routes>

                        <Route path={'/dialogs/*'} element={<DialogsContainer />}/>
                        <Route path={'/users/*'} element={<UserContainer />}/>
                        <Route path={'/profile/:userID'} element={<ProfileContainer />}/>
                        <Route path={'/profile/'} element={<ProfileContainer />}/>

                    </Routes>
                </div>
            </div>

    );
}

export default App;
