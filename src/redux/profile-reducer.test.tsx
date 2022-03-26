import {ActionTypes, ProfilePageType} from "./store";
import profileReducer, {addPostActionCreator, updateNewPostTextActionCreator} from "./profile-reducer";


let initialState = {
    posts: [
        {id: 1, message: "It`s my first post!", likesCount: 4},
        {id: 2, message: "IT-incubator", likesCount: 89},
        {id: 3, message: "Post", likesCount: 454},
        {id: 4, message: "Kabzda kak prosto!!", likesCount: 7},
    ],

    newPostText: 'it-incubator'
}

test('new post should be added', ()=>{

    let endState = profileReducer(initialState, addPostActionCreator())

    expect(endState.posts.length).toBe(5)
    expect(endState.posts[4].message).toBe('it-incubator')


})

test('newPostText should be changed', ()=>{

    let endState = profileReducer(initialState, updateNewPostTextActionCreator('newText'))

    expect(endState.newPostText).toBe('newText')



})