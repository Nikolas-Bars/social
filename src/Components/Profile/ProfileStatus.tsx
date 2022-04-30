import React, {ChangeEvent, useState} from 'react';

export const ProfileStatus = () => {

    const [toggleEditeSpan, setToggleEditeSpan] = useState<boolean>(true)

    const [title, setTitle] = useState('STATUS')

    const onChangeHandler =(e: ChangeEvent<HTMLInputElement>)=> {
        setTitle(e.currentTarget.value)
    }

    return (
        <div>
            {toggleEditeSpan ? <div onDoubleClick={()=> {setToggleEditeSpan(false)}}>{title ? title : 'place for status'}</div>
                : <input value={title} autoFocus onChange={onChangeHandler} onBlur={()=>{setToggleEditeSpan(true)}}/>}

        </div>
    );
};

