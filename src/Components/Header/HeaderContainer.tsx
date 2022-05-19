import React from "react";
import s from './Header.module.css'
import cat from './../../img/cat.png'
import Header from "./Header";
import {connect} from "react-redux";
import {StateType} from "../../redux/store";
import {GlobalStateType} from "../../redux/redux-store";
import {getAuthUserDataTC, logout, setAuthUserDataAC} from "../../redux/auth-reducer";
import axios from "axios";
import {authAPI} from "../../Api/api";


type PropsType = {
    isAuth: boolean,
    login: string | null
    getAuthUserDataTC: ()=> void
}

 class HeaderContainer extends React.Component<PropsType> {

    // componentDidMount(): void {
    //     this.props.authTC()
    // }

     render(){
        // @ts-ignore
         return ( <Header login={this.props.login} isAuth={this.props.isAuth} logout={this.props.logout}/>)
    }
 }

 const mapStateToProps =(state: GlobalStateType)=> {
     return {
         isAuth: state.auth.isAuth,
         login: state.auth.login,
     }
 }

export default connect(mapStateToProps, {setUserDataAC: setAuthUserDataAC, getAuthUserDataTC, logout})(HeaderContainer)