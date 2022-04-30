import React from 'react';
import {Navigate} from "react-router-dom";
import Dialogs from "../Dialogs/Dialogs";
import {GlobalStateType} from "../../redux/redux-store";
import {connect} from "react-redux";


let mapStateToPropsForRedirect = (state: GlobalStateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}

const WithAuthRedirect = (Component: any) => {

    let RedirectComponent = (props: any) => {
        if (!props.isAuth) return <Navigate to={'/login'}/>
        return <Component {...props} />
    }

    let ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedRedirectComponent

};

export default WithAuthRedirect;