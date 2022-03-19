import React, {ChangeEvent, KeyboardEvent} from "react";
import Post from "./Post/Post";
import {
    ActionTypes,
    PostType,
    StateType, StoreType,
} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addNewMessageActionCreator, NewMessageTextActionCreator} from "../../../redux/dialogs-reducer";



/*const MyPostsContainer = () => {

    return (

        <StoreContext.Consumer>{(store: StoreType) => {

            let state: StateType = store.getState()

            const addPost = () => {

                if (state.profilePage.newPostText.trim() !== '') {
                    store.dispatch(addPostActionCreator())

                }
            }

            const onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
                let text = event.currentTarget.value;
                store.dispatch(updateNewPostTextActionCreator(text))
            }

            const onKeyPressEnter = (event: KeyboardEvent<HTMLTextAreaElement>) => {
                if (event.code === "Enter") {
                    addPost()
                }
            }


            return <MyPosts addPost={addPost}
                            onKeyPressEnter={onKeyPressEnter}
                            onPostChange={onPostChange} profilePage={state.profilePage}
                            newPostText={state.profilePage.newPostText} />
        }
        }
        </StoreContext.Consumer>
    )
}*/


let mapStateToProps = (state: StateType) =>{
    return {
        profilePage: state.profilePage,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: any) =>{
    return {
        addPost: ()=>{
            dispatch(addPostActionCreator())
        }
        ,
        onPostChange: (event: ChangeEvent<HTMLTextAreaElement>)=>{
            let text = event.currentTarget.value;
            dispatch(updateNewPostTextActionCreator(text))
        }

    }

}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer