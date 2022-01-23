import React from 'react';
import './App.css';
import Rica from './img/Rica.jpg'
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";



function App(props: any) {
    return (
        <BrowserRouter>

            <div className={"app-wrapper"}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>

                    <Routes>
                        <Route path={'/profile/*'} element={<Profile posts={props.posts}/>}/>
                        <Route path={'/dialogs/*'} element={<Dialogs  messagesData={props.messagesData} dialogsData={props.dialogsData}/>}/>
                    </Routes>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
