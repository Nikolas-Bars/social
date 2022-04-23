import React from "react";
import s from './Header.module.css'
import cat from './../../img/cat.png'
import Header from "./Header";
import {connect} from "react-redux";
import {StateType} from "../../redux/store";
import {GlobalStateType} from "../../redux/redux-store";
import {authTC, setUserDataAC} from "../../redux/auth-reducer";
import axios from "axios";
import {authAPI} from "../../Api/api";


type PropsType = {
    isAuth: boolean,
    login: string | null
    authTC: ()=> void
}

 class HeaderContainer extends React.Component<PropsType> {

    componentDidMount(): void {
        this.props.authTC()
    }

     render(){
        return (
            <Header login={this.props.login} />
        )
    }
 }

 const mapStateToProps =(state: GlobalStateType)=> {
     return {
         isAuth: state.auth.isAuth,
         login: state.auth.login,
     }
 }

export default connect(mapStateToProps, {setUserDataAC, authTC})(HeaderContainer)