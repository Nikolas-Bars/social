import React, {ChangeEvent, useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {GlobalStateType} from "../../redux/redux-store";

type PropsType = {
    updateStatusTC: (status: string)=> void
}

export const ProfileStatus = (props: PropsType) => {

    const status = useSelector<GlobalStateType>(state => state.profilePage.status)as string

    const [toggleEditeSpan, setToggleEditeSpan] = useState<boolean>(true)

    const [title, setTitle] = useState<string>('')

    useEffect(()=>{

        setTitle(status)
        console.log(title)
    },[status])

    const setTitleHandler = (e: ChangeEvent<HTMLInputElement>) =>{
        setTitle(e.currentTarget.value)
        console.log(title)
    }

    const onBlurHandler = () => {
        setToggleEditeSpan(true)
        props.updateStatusTC(title)
    }

    return (
        <div>
            {toggleEditeSpan ? <div onDoubleClick={()=> {setToggleEditeSpan(false)}}>{status ? status : 'Place for status'}</div>

                : <input value={title} autoFocus onChange={setTitleHandler} onBlur={onBlurHandler}/>}
        </div>
    );
};

