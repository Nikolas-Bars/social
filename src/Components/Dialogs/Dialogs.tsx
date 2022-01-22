import React from 'react'
import s from './../Dialogs/Dialogs.module.css'
import {NavLink} from "react-router-dom";

let dialogsData = [
    {name: 'Sasha', id: '1'},
    {name: 'Lena', id: '2'},
    {name: 'Leha', id: '3'},
    {name: 'Viktor', id: '4'},
]

let messagesData = [
    {message: 'Hi'},
    {message: 'How are you?'},
    {message: 'What is your name?'},
    {message: 'I love to eat!'},
]

let dialogsElement = dialogsData.map(el => <div className={s.dialog}><NavLink to={'/dialogs/' + el.id}>{el.name}</NavLink></div>)
let messagesElement = messagesData.map(el => <div className={s.message}>{el.message}</div>)


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
              </div>

            <div className={s.messages}>
                {messagesElement}
            </div>

        </div>
    )
}

export default Dialogs