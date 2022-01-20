import React from 'react'
import s from './../Dialogs/Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    Sasha
                </div>
                <div className={s.dialog}>
                    Lena
                </div>
                <div className={s.dialog}>
                    Leha
                </div>
                <div className={s.dialog}>
                    Viktor
                </div>
            </div>

            <div className={s.messages}>
                <div className={s.message}>
                    Hi
                </div>
                <div className={s.message}>
                    How are you?
                </div>
                <div className={s.message}>
                    What is your name?
                </div>
                <div className={s.message}>
                    I love to eat!
                </div>
            </div>

        </div>
    )
}

export default Dialogs