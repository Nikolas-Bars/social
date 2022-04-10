import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {ActionTypes} from "./redux/store";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UserContainer from "./Components/Users/UserContainer";


type AppPropsType = {

    dispatch: (action: ActionTypes)=>void
    store: any
}

const App = (props: AppPropsType) => {
    return (
            <div className={"app-wrapper"}>

                <Header/>
                <Navbar state={props.store.getState().sideBarFriends}/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path={'*'} element={<Profile/> }/>
                        <Route path={'/dialogs/*'} element={<DialogsContainer />}/>
                        <Route path={'/users/*'} element={<UserContainer />}/>
                    </Routes>
                </div>
            </div>

    );
}

export default App;
