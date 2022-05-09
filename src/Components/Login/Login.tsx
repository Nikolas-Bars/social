import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {Input} from "../common/FormControls/FormControl";
import {maxLengthCreator, minLengthCreator, requiredField} from "../../utils/validators";

export type FormDataType ={
    login: string
    password: string
    rememberMe: boolean
}

let maxLength = maxLengthCreator(40)
let minLength = minLengthCreator(4)

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    ///создаем простую форму только вместо input используе Field
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'login'} name={'login'} validate={[requiredField, maxLength, minLength]} component={Input}/>
            </div>
            <div>
                <Field placeholder={'password'} type={'password'} validate={[requiredField, maxLength, minLength]} name={'password'} component={Input}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} validate={[requiredField, maxLength, minLength]} component={Input}/>Remember me
            </div>
            <div>
                <button>login</button>
            </div>
        </form>
    )
}



const LoginReduxForm = reduxForm<FormDataType>({form: 'LoginForm'})(LoginForm) // остдаем созданную выше компоненту библиотеке redux form


export const Login = () => {     // отрисовываем результат

    const onSubmit = (formData: FormDataType) =>{
        console.log(formData)
    }

    return (
        <div style={{fontSize: '30px'}}>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

