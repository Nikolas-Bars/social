import React from "react";
import s from "../Dialogs.module.css";

let messagesData = [
    {message: 'Hi'},
    {message: 'How are you?'},
    {message: 'What is your name?'},
    {message: 'I love to eat!'},
]

let messagesElement = messagesData.map(el => <div className={s.message}>{el.message}</div>)

type MessagePropsType = {
    message: string
}

const Message =(props: MessagePropsType)=>{
    return(

           <div> {props.message}</div>

    )
}

export default Message