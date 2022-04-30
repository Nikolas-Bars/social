import React, {ChangeEvent, useEffect, useState} from 'react'
import s from './../Dialogs/Dialogs.module.css'
import {Navigate, NavLink, useNavigate, useParams} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    ActionTypes, DialogsPageType,

    DialogsType,
    MessagesType,

} from "../../redux/store";
import {addNewMessageActionCreator, NewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {useSelector} from "react-redux";
import {GlobalStateType} from "../../redux/redux-store";

type DialogsPropsType = {
    onClickHandler: (dialogID: string) => void
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
    dialogsPage: DialogsPageType
    isAuth: boolean
    dialogID: string
}


const Dialogs: React.FC<DialogsPropsType> = (props) => {

    /*

        let Navigate = useNavigate()

        useEffect(()=>{
            if(!props.isAuth){
                Navigate('/login')
            }
        }, [props.isAuth])
    */


    /*    let dialogsElement = props.dialogsPage.dialogs.map(el => <div key={el.id}>
            <NavLink to={`/dialogs/` + el.id}><DialogItem name={el.name} img={el.img}/></NavLink>
        </div>)


        let messagesElement = props.dialogsPage.messages.map(el => <div
            className={el.messageRight ? s.messageRight : s.messageLeft} key={el.id}>
            <Message message={el.message}/>
        </div>)







        let onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            props.onChangeHandler(e)
        }

        let onClickHandler = () => {
            if (props.dialogsPage.newMessageText.trim() !== '') {
                props.onClickHandler()
            }
        }


        return (
            <div className={s.dialogMainContainer}>
                <div className={s.dialogs}>
                    <div className={s.dialogsItems}>
                        {dialogsElement}
                    </div>

                    <div className={s.dialogsCenter}></div>

                    <div className={s.messageBlockDiv}>
                        {messagesElement}
                    </div>
                </div>

                <input type={'input'} value={props.dialogsPage.newMessageText} onChange={onChangeHandler}
                       placeholder={'enter a new message...'}/>
                <button onClick={onClickHandler}>SEND MESSAGE</button>
            </div>

        )
    }*/

    let dialogID = useParams()

    let dID = dialogID.dialogID as string

    const dialogsState = useSelector<GlobalStateType>(state => state.dialogsPage.dialogs)


    let [messagesElement, setMessagesElement] = useState<any>()

    useEffect(() => {
        props.dialogsPage.dialogs.map((el) => {
            if (el.id === dialogID.dialogID) {
                debugger
                let messagesElement = el.messages.map(el => <div
                    className={el.messageRight ? s.messageRight : s.messageLeft} key={el.id}>
                    <Message message={el.message}/>
                </div>)
                setMessagesElement(messagesElement)

            }
        })
    }, [dialogID, dialogsState])


    let dialogsElement = props.dialogsPage.dialogs.map(el => <div key={el.id}>
        <NavLink to={`/dialogs/` + el.id}><DialogItem name={el.name} img={el.img}/></NavLink>
    </div>)

    let onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeHandler(e)
    }

    let onClickHandler = () => {
        if (props.dialogsPage.newMessageText.trim() !== '') {
            props.onClickHandler(dID)
            console.log(dialogID)
        }
    }


    return (
        <div className={s.dialogMainContainer}>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElement}
                </div>

                <div className={s.dialogsCenter}></div>

                <div className={s.messageBlockDiv}>
                    {messagesElement}
                </div>
            </div>

            <input type={'input'} value={props.dialogsPage.newMessageText} onChange={onChangeHandler}
                   placeholder={'enter a new message...'}/>
            <button onClick={onClickHandler}>SEND MESSAGE</button>
        </div>

    )
}

export default Dialogs