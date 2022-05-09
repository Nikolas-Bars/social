import React from "react";
import s from './FormControl.module.css'

type PropsType = {
    input: object
    meta: {active: any
        asyncValidating: any
        autofilled: any
        dirty: any
        dispatch: any
        error: any
        form: string
        initial: any
        invalid: any
        pristine: any
        submitFailed: any
        submitting: any
        touched: any
        valid: any
        visited: any
        warning: any}
    placeholder: string
}

export const FormControl: React.FC<PropsType> = ({input, meta, children, ...props}) => {

    let hasError = meta.touched && meta.error

    return (

        <div className={`${s.formControl} ${hasError && s.error}`}>
            <div> {children}</div>
            {hasError && <div className={s.error}><span>{meta.error}</span></div>}
        </div>
    )
}


export const TextArea: React.FC<PropsType> = (props) => {
    const {input, meta, children, ...restProps} = props
    return (
        <FormControl {...props}><textarea {...input}  {...restProps} /></FormControl>
    )
}

export const Input: React.FC<PropsType> = (props) => {
    const {input, meta, children, ...restProps} = props
    return (
        <FormControl {...props}><input {...input}  {...restProps} /></FormControl>
    )
}