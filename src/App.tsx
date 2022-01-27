import React from 'react';
import './App.css';
import Rica from './img/Rica.jpg'
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";




function App(props: any) {
    return (
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar state={props.state.sideBarFriends}/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path={'/profile/*'} element={<Profile  addPost={props.addPost} profilePage={props.state.profilePage} upText={props.upText}/> }/>
                        <Route path={'/dialogs/*'} element={<Dialogs  state={props.state.dialogsPage} />}/>
                    </Routes>
                </div>
            </div>

    );
}

export default App;
