import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {maxLengthCreator, minLengthCreator, requiredField} from "../../../utils/validators";
import {TextArea} from "../../common/FormControls/FormControl";

type MyPostFormType = {
    addPost: (text: string)=> void
}

type PropsType = {
    newPostText: string
}

let maxLength = maxLengthCreator(30)
let minLength = minLengthCreator(5)


export const MyPostFormField: React.FC<InjectedFormProps<PropsType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>

            <Field placeholder={"Напишите тут что-нибудь..."}
                   validate={[requiredField, maxLength, minLength]}
                   component={TextArea}
                   name={"newPostText"}/>

            <button>Опубликовать.</button>
        </form>
    );
};

const MyPostFormRedux = reduxForm<PropsType>({form: 'NewPost'})(MyPostFormField)

export const MyPostForm: React.FC<MyPostFormType> = (props) => {

    const addPost = (formData: PropsType) =>{
        props.addPost(formData.newPostText)
    }

    return (
        <div>
            <MyPostFormRedux onSubmit={addPost}/>
        </div>
    )
}