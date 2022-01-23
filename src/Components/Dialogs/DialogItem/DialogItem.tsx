import React from "react";
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";


type DialogsItemPropsType = {
    name: string,
    img: any
}

const DialogItem = (props:DialogsItemPropsType) => {
    debugger
    return (
        <div className={s.dialogsImg}>
            <img src={props.img} /><span className={s.dialog}>{props.name}</span>

        </div>
    )
}

export default DialogItem