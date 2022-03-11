import React, {ChangeEvent, useState} from 'react'
import s from './../Dialogs/Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsType, MessagesType} from "../../redux/state";

type DialogsPropsType = {
    state: {
        dialogs: Array<DialogsType>,
        messages: Array<MessagesType>
    }
}



const Dialogs = (props: DialogsPropsType) => {

    let [text, setText] = useState('')

    let dialogsElement = props.state.dialogs.map(el => <div key={el.id}><NavLink to={'/dialogs/' + el.id}><DialogItem name={el.name} img={el.img}/></NavLink></div>)
    let messagesElement = props.state.messages.map(el => <div className={el.messageRight ? s.messageRight : s.messageLeft} key={el.id}><Message  message={el.message} /></div>)

    let onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>{
        let newText = e.currentTarget.value
        setText(newText)
        console.log(text)
    }

    let onClickHandler =()=>{
        debugger
        if(text.trim() !== ''){
        let newMessageObj = {message: text, id: (props.state.messages.length + 1).toString(), messageRight: props.state.messages[props.state.messages.length - 1].messageRight === false ? true : false}
        props.state.messages.push(newMessageObj)
        setText('')
        }}

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>

            <div className={s.messageBlockDiv}>
                {messagesElement}
            </div>
            <input type={'input'} value={text} onChange={onChangeHandler} placeholder={'enter a new message...'} /><button onClick={onClickHandler}>SEND MESSAGE</button>

        </div>
    )
}

export default Dialogs