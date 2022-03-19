import React, {ChangeEvent, KeyboardEvent} from "react";
import Post from "./Post/Post";
import {
    ActionTypes,
    PostType,
    StateType, StoreType,
} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../SroreContext";


const MyPostsContainer = () => {

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
}

export default MyPostsContainer