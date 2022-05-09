import React from 'react';
import {useDispatch} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";

const News = () => {

    const dispatch = useDispatch()

    const onClickHandler = () => {
        dispatch(loginTC('nikolay.prasolov@gmail.com', '481516Lost', true))
    }

    return (
        <div>
          <button onClick={onClickHandler}>login test</button>
        </div>
    );
};

export default News;