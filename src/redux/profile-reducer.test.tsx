import {ProfileType} from "./store";
import profileReducer, {addPostActionCreator, ProfileStateType} from "./profile-reducer";


let initialState: ProfileStateType

beforeEach(()=>{
    initialState = {
        posts: [
            {id: 1, message: "It`s my first post!", likesCount: 4},
            {id: 2, message: "IT-incubator", likesCount: 89},
            {id: 3, message: "Post", likesCount: 454},
            {id: 4, message: "Kabzda kak prosto!!", likesCount: 7},
        ],
        profile: {}as ProfileType,
        status: '',
        error: null,
        errorUpdateUserData: null
    }
})

test('new post should be added', ()=>{

    let endState = profileReducer(initialState, addPostActionCreator('it-incubator'))

    expect(endState.posts.length).toBe(5)
    expect(endState.posts[4].message).toBe('it-incubator')


})

