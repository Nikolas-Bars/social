import profileReducer, {addPostActionCreator, deletePostActionCreator} from "../redux/profile-reducer";
import {ProfileType} from "../redux/store";




it('length of new state should be 5',()=>{

    let action = addPostActionCreator('new post')
    let startState = {
        posts: [
            {id: 1, message: "It`s my first post!", likesCount: 4},
            {id: 2, message: "IT-incubator", likesCount: 89},
            {id: 3, message: "Post", likesCount: 454},
            {id: 4, message: "Kabzda kak prosto!!", likesCount: 7},
        ],
        profile: {}as ProfileType,
        status: 'Place for status',
        error: null,
        errorUpdateUserData: null
    }

    let newState = profileReducer(startState, action)

    expect(newState.posts.length).toBe(5)

})

it('new message of new porst should be correct',()=>{

    let action = addPostActionCreator('new post')
    let startState = {
        posts: [
            {id: 1, message: "It`s my first post!", likesCount: 4},
            {id: 2, message: "IT-incubator", likesCount: 89},
            {id: 3, message: "Post", likesCount: 454},
            {id: 4, message: "Kabzda kak prosto!!", likesCount: 7},
        ],
        profile: {}as ProfileType,
        status: 'Place for status',
        error: null,
        errorUpdateUserData: null
    }

    let newState = profileReducer(startState, action)

    expect(newState.posts[4].message).toBe('new post')

})

it('post should be deleted',()=>{

    let action = deletePostActionCreator(1)
    let startState = {
        posts: [
            {id: 1, message: "It`s my first post!", likesCount: 4},
            {id: 2, message: "IT-incubator", likesCount: 89},
            {id: 3, message: "Post", likesCount: 454},
            {id: 4, message: "Kabzda kak prosto!!", likesCount: 7},
        ],
        profile: {}as ProfileType,
        status: 'Place for status',
        error: null,
        errorUpdateUserData: null
    }

    let newState = profileReducer(startState, action)

    expect(newState.posts.length).toBe(3)

})