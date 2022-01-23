import React from "react";
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";


type DialogsItemPropsType = {
    name: string
}

const DialogItem = (props:DialogsItemPropsType) => {
    return (
        <div>
            {props.name}
        </div>
    )
}

export default DialogItem