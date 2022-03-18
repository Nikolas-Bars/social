import React from 'react';
import './App.css';
import Rica from './img/Rica.jpg'
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {ActionTypes, StateType} from "./redux/store";

type AppPropsType = {
    state: StateType
    dispatch: (action: ActionTypes)=>void
}

const App = (props: AppPropsType) => {
    return (
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar state={props.state.sideBarFriends}/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path={'*'} element={<Profile dispatch={props.dispatch}  profilePage={props.state.profilePage} /> }/>
                        <Route path={'/dialogs/*'} element={<Dialogs dispatch={props.dispatch} state={props.state.dialogsPage} />}/>
                    </Routes>
                </div>
            </div>

    );
}

export default App;
