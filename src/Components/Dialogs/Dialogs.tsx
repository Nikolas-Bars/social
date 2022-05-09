import React, {ChangeEvent, useEffect, useState} from 'react'
import s from './../Dialogs/Dialogs.module.css'
import { NavLink, useParams} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
     DialogsPageType,

} from "../../redux/store";

import {useSelector} from "react-redux";
import {GlobalStateType} from "../../redux/redux-store";
import {DialogFormRender} from "./DialogForm";

type DialogsPropsType = {
    onClickHandler: (dialogID: string, text: string) => void
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
    dialogsPage: DialogsPageType
    isAuth: boolean
    dialogID: string
}


const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogID = useParams()

    let dID = dialogID.dialogID as string

    const dialogsState = useSelector<GlobalStateType>(state => state.dialogsPage.dialogs)

    let [messagesElement, setMessagesElement] = useState<any>()

    useEffect(() => {
        props.dialogsPage.dialogs.map((el) => {
            if (el.id === dialogID.dialogID) {

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

    let onClickHandler = (text: string) => {
        debugger
        if (text.trim() !== '') {
            props.onClickHandler(dID, text)
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
<div className={s.textareaBlock}>
            <DialogFormRender onSubmit={onClickHandler}/> {/*когда наша форма соберет все данные, только тогда выполнится ф-ия onSubmit*/}
        </div>
        </div>

    )
}

export default Dialogs