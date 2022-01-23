import React from "react";
import s from "../Dialogs.module.css";

type MessagePropsType = {
    message: string
}

const Message =(props: MessagePropsType)=>{


    return(
           <span className={s.messageText}>{props.message}</span>
    )
}

export default Message