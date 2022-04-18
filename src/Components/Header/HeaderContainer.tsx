import React from "react";
import s from './Header.module.css'
import cat from './../../img/cat.png'
import Header from "./Header";
import {connect} from "react-redux";
import {StateType} from "../../redux/store";
import {GlobalStateType} from "../../redux/redux-store";
import {setUserDataAC} from "../../redux/auth-reducer";
import axios from "axios";


type PropsType = {
    isAuth: boolean,
    login: string | null
    setUserDataAC: (id: number, email: string, login: string)=> void
}

 class HeaderContainer extends React.Component<PropsType> {

    componentDidMount(): void {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true}).then(response => {
            if(response.data.resultCode === 0){

                let {email, id, login} = response.data.data
                this.props.setUserDataAC(id, email, login);
            }


        })
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

export default connect(mapStateToProps, {setUserDataAC})(HeaderContainer)