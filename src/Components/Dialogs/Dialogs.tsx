import React, {ChangeEvent, useState} from 'react'
import s from './../Dialogs/Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    ActionTypes,

    DialogsType,
    MessagesType,

} from "../../redux/state";
import {addNewMessageActionCreator, NewMessageTextActionCreator} from "../../redux/dialogs-reducer";

type DialogsPropsType = {
    state: {
        dialogs: Array<DialogsType>,
        messages: Array<MessagesType>
        newMessageText: string
    }
    dispatch: (action: ActionTypes)=>void
}



const Dialogs = (props: DialogsPropsType) => {

    let dialogsElement = props.state.dialogs.map(el => <div key={el.id}><NavLink to={'/dialogs/' + el.id}><DialogItem name={el.name} img={el.img}/></NavLink></div>)
    let messagesElement = props.state.messages.map(el => <div className={el.messageRight ? s.messageRight : s.messageLeft} key={el.id}><Message  message={el.message} /></div>)

    let onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>{
        let text = e.currentTarget.value
        props.dispatch(NewMessageTextActionCreator(text))
    }

    let onClickHandler =()=>{
        if(props.state.newMessageText.trim() !== ''){
            props.dispatch(addNewMessageActionCreator())
            props.dispatch(NewMessageTextActionCreator(''))
        } }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>

            <div className={s.messageBlockDiv}>
                {messagesElement}
            </div>
            <input type={'input'} value={props.state.newMessageText} onChange={onChangeHandler} placeholder={'enter a new message...'} /><button onClick={onClickHandler}>SEND MESSAGE</button>

        </div>
    )
}

export default Dialogs