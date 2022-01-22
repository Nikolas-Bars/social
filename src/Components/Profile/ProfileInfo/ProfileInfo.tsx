import s from "./ProfileInfo.module.css";
import Rica from "../../../img/Rica.jpg";
import React from "react";


const ProfileInfo = () => {
    return (
        <div className={s.content}>

            <div className={s.imgc}>
                <img src={Rica}/>
            </div>

            <div className={s.descriptionBlock}>
                Ava + discription
            </div>

        </div>
    )
}

export default ProfileInfo