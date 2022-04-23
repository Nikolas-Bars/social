import React, {ChangeEvent, useState} from 'react'
import {
    ActionTypes,
    DialogsType,
    MessagesType, StateType, StoreType,

} from "../../redux/store";
import {addNewMessageActionCreator, NewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {GlobalStateType} from "../../redux/redux-store";




/*const DialogsContainer = () => {



    return (
        <StoreContext.Consumer>{(store: StoreType)=> {

            let state: StateType = store.getState()

            let dialogsElement = state.dialogsPage.dialogs.map(el => <div key={el.id}><NavLink to={'/dialogs/' + el.id}><DialogItem name={el.name} img={el.img}/></NavLink></div>)
            let messagesElement = state.dialogsPage.messages.map(el => <div className={el.messageRight ? s.messageRight : s.messageLeft} key={el.id}><Message  message={el.message} /></div>)

            let onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>{
                let text = e.currentTarget.value
                store.dispatch(NewMessageTextActionCreator(text))
            }

            let onClickHandler =()=>{
                if(state.dialogsPage.newMessageText.trim() !== ''){
                    store.dispatch(addNewMessageActionCreator())
                    store.dispatch(NewMessageTextActionCreator(''))
                } }


            return <Dialogs onClickHandler={onClickHandler} dialogsPage={state.dialogsPage} onChangeHandler={onChangeHandler}/>}}
        </StoreContext.Consumer>

    )
}*/



let mapStateToProps = (state: GlobalStateType) =>{
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: any) =>{
    return {
        onClickHandler: ()=>{
                           dispatch(addNewMessageActionCreator())
                dispatch(NewMessageTextActionCreator(''))
             },
        onChangeHandler: (e: ChangeEvent<HTMLInputElement>)=>{

            let text = e.currentTarget.value
            dispatch(NewMessageTextActionCreator(text))
        }

        }

    }




const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer