import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {Input} from "../common/FormControls/FormControl";
import {maxLengthCreator, minLengthCreator, requiredField} from "../../utils/validators";
import {connect} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";
import {GlobalStateType} from "../../redux/redux-store";
import {useNavigate} from "react-router-dom";
import s from './../common/FormControls/FormControl.module.css'

export type FormDataType ={
    login: string
    password: string
    rememberMe: boolean
}

let maxLength = maxLengthCreator(40)
let minLength = minLengthCreator(4)

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
    ///создаем простую форму только вместо input используе Field
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'login'} name={'login'} validate={[requiredField, maxLength, minLength]} component={Input}/>
            </div>
            <div>
                <Field placeholder={'password'} type={'password'} validate={[requiredField, maxLength, minLength]} name={'password'} component={Input}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'}  component={Input}/>Remember me
            </div>
            <div className={error ? s.summuryError: ''}>
                {error}
            </div>
            <div>
                <button>login</button>
            </div>
        </form>
    )
}



const LoginReduxForm = reduxForm<FormDataType>({form: 'LoginForm'})(LoginForm) // остдаем созданную выше компоненту библиотеке redux form


type LoginPropsType = {
    loginTC: (email: string, password: string, rememberMe: boolean) => void, isAuth: boolean
}

const Login = (props: LoginPropsType) => {     // отрисовываем результат

    const onSubmit = (formData: FormDataType) =>{
        props.loginTC(formData.login, formData.password, formData.rememberMe)
    }

    let navigate = useNavigate()

    {props.isAuth && navigate('/profile')}

    return (
        <div style={{fontSize: '30px'}}>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

let mapStateToProps = (state: GlobalStateType) =>{
    return {
        isAuth: state.auth.isAuth
    }
}


export default connect (mapStateToProps, {loginTC})(Login)

