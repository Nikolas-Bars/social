import React from 'react';
import { Field, reduxForm } from 'redux-form'


export const LoginForm = (props: any) => {
    debugger///создаем простую форму только вместо input используе field
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'login'} name={'login'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'password'} name={'password'} component={'input'}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={'input'}/>Remember me
            </div>
            <div>
                <button>login</button>
            </div>
        </form>
    )
}


// @ts-ignore
const LoginReduxForm = reduxForm({form: 'LoginForm'})(LoginForm) // остдаем созданную выше компоненту библиотеке redux form

export const Login = () => {     // отрисовываем результат

    const onSubmit = (formData: any) =>{
        console.log(formData)
    }

    return (
        <div style={{fontSize: '30px'}}>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

