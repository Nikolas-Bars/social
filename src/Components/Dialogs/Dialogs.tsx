import React, {ChangeEvent, useState} from 'react'
import s from './../Dialogs/Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    ActionTypes, DialogsPageType,

    DialogsType,
    MessagesType,

} from "../../redux/store";
import {addNewMessageActionCreator, NewMessageTextActionCreator} from "../../redux/dialogs-reducer";

type DialogsPropsType = {
    onClickHandler:()=>void
    onChangeHandler:(e: ChangeEvent<HTMLInputElement>)=>void
    dialogsPage: DialogsPageType
}



const Dialogs = (props: DialogsPropsType) => {

    let dialogsElement = props.dialogsPage.dialogs.map(el => <div key={el.id}><NavLink to={'/dialogs/' + el.id}><DialogItem name={el.name} img={el.img}/></NavLink></div>)
    let messagesElement = props.dialogsPage.messages.map(el => <div className={el.messageRight ? s.messageRight : s.messageLeft} key={el.id}><Message  message={el.message} /></div>)



    let onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>{
          props.onChangeHandler(e)
    }

    let onClickHandler =()=>{
        props.onClickHandler()
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>

            <div className={s.messageBlockDiv}>
                {messagesElement}
            </div>
            <input type={'input'} value={props.dialogsPage.newMessageText} onChange={onChangeHandler} placeholder={'enter a new message...'} /><button onClick={onClickHandler}>SEND MESSAGE</button>

        </div>
    )
}

export default Dialogs