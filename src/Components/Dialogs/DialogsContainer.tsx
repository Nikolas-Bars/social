import React, {ChangeEvent, useState} from 'react'
import s from './../Dialogs/Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    ActionTypes,
    DialogsType,
    MessagesType, StateType,

} from "../../redux/store";
import {addNewMessageActionCreator, NewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

type PropsType = {
    store: any
}



const DialogsContainer = (props: PropsType) => {

    let state: StateType = props.store.getState()

    let dialogsElement = state.dialogsPage.dialogs.map(el => <div key={el.id}><NavLink to={'/dialogs/' + el.id}><DialogItem name={el.name} img={el.img}/></NavLink></div>)
    let messagesElement = state.dialogsPage.messages.map(el => <div className={el.messageRight ? s.messageRight : s.messageLeft} key={el.id}><Message  message={el.message} /></div>)

    let onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>{
        let text = e.currentTarget.value
        props.store.dispatch(NewMessageTextActionCreator(text))
    }

    let onClickHandler =()=>{
        if(state.dialogsPage.newMessageText.trim() !== ''){
            props.store.dispatch(addNewMessageActionCreator())
            props.store.dispatch(NewMessageTextActionCreator(''))
        } }


    return (
     <Dialogs onClickHandler={onClickHandler} dialogsPage={state.dialogsPage}  onChangeHandler={onChangeHandler}/>

    )
}

export default DialogsContainer