import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {Input, TextArea} from "../common/FormControls/FormControl";
import {maxLengthCreator, minLengthCreator, requiredField} from "../../utils/validators";

type PropsType = {
    dialogForm: string
}

let maxLength = maxLengthCreator(500)
let minLength = minLengthCreator(5)

export const DialogForm: React.FC<InjectedFormProps<PropsType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}> {/*handle submit создаст объект со всеми
        данными из форм и САМ отправит их в onSubmit в DialogReduxForm*/}
            <div>
                <Field placeholder={'new message'}
                        name={'dialogForm'}
                        validate={[requiredField, maxLength, minLength]}
                        component={Input}/>
            </div>

           <div> <button>Send message</button></div>

        </form>
    );
};

const DialogReduxForm = reduxForm<PropsType>({form: 'DialogForm'})(DialogForm)

export const DialogFormRender = (props: {onSubmit: (text: string)=> void}) =>{

    const onSubmit = (formData: PropsType) => {
       props.onSubmit(formData.dialogForm)
    }

    return (
        <div>
            <DialogReduxForm onSubmit={onSubmit}/>
        </div>
    )

}

