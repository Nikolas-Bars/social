import  {addPostActionCreator, setUserProfile, updateNewPostTextActionCreator} from "./profile-reducer";
import {addNewMessageActionCreator, NewMessageTextActionCreator} from "./dialogs-reducer";
import {
    toggleFollow, setUsers, setCurrentPage, setTotalUserCount, toggleIsFetching, toggleFollowingProgress
} from "./userReducer";
import {setUserDataAC} from "./auth-reducer";

/*
let rerenderEntireTree = (state: typeof store.getState) => {

} // переименуем в callSubscriber

*/


export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type MessagesType = {
    message: string
    id: string
    messageRight: boolean
}
export type DialogsType = {
    name: string
    id: string
    img: string
}
export type FriendsType = {
    img: string
    id: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    profile: null | ProfileType
    newPostText: string
}

export type ProfileType = {    // как правильно протипизировать???
    "aboutMe": null | string,
    "contacts": {
        'dqwd': string  // почему ts не ругается когда приходит response без этого св-ва????
        "facebook": null | string,
        "website": null | string,
        "vk": null | string,
        "twitter": null | string,
        "instagram": null | string,
        "youtube": null | string,
        "github": null | string,
        "mainLink": null | string
    },
    "lookingForAJob": boolean,
    "lookingForAJobDescription": null | boolean,
    "fullName": null | string,
    "userId": number,
    "photos": {
        "small": null | string,
        "large": null | string
    }
}


export type DialogsPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
    newMessageText: string
}
export type SideBarFriendsType = {
    friends: Array<FriendsType>
}

export type AuthStateType = {
    id: number | null,
    email: string,
    login: string,
    isAuth: boolean
}

export type UsersType = {

    id: number,
    name: string
    photos: { small: null | string, large: null | string }
    followed: boolean
    status: null | string
    uniqueUrlName: null | string

}

export type usersPageType = {
    users: Array<UsersType>
    pageSize: number,
    count: number,
    currentPage: number
    isFetching: boolean
    folliwingProgress: number[]
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sideBarFriends: SideBarFriendsType
    usersPage: usersPageType

}

export type StoreType = {
    _state: StateType,
    _callSubscriber: (state: StateType) => void
    subscribe: (observer: ObserverType) => void
    getState: () => StateType
    dispatch: (action: ActionTypes) => void
}

type ObserverType = (state: StateType) => void

export type ActionTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof NewMessageTextActionCreator>
    | ReturnType<typeof addNewMessageActionCreator>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUserCount>
    | ReturnType<typeof toggleFollow>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserDataAC>
    | ReturnType<typeof toggleFollowingProgress>


/*let store: StoreType = {

    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "It`s my first post!", likesCount: 4},
                {id: 2, message: "IT-incubator", likesCount: 89},
                {id: 3, message: "Post", likesCount: 454},
                {id: 4, message: "Kabzda kak prosto!!", likesCount: 7},
            ],

            newPostText: 'it-incubator'
        },
        dialogsPage: {
            messages: [
                {message: 'Hi', id: '1', messageRight: false},
                {message: 'Hi bro!', id: '2', messageRight: true},
                {message: 'How are you?', id: '3', messageRight: false},
                {message: 'I`m fine.', id: '4', messageRight: true},
                {message: 'It`s good. ', id: '5', messageRight: false}
            ],

            newMessageText: "your message...",

            dialogs: [
                {name: 'Sasha', id: '1', img: icon2},
                {name: 'Lena', id: '2', img: icon3},
                {name: 'Leha', id: '3', img: icon4},
                {name: 'Viktor', id: '4', img: icon5},
            ]
        },
        sideBarFriends: {
            friends: [
                {img: icon2, id: '5'},
                {img: icon3, id: '6'},
                {img: icon4, id: '7'},
            ]
        }
    },

    _callSubscriber(state) {
        console.log('cat')
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },


    dispatch(action: ActionTypes) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sideBarFriends = sidebarReducer(this._state.sideBarFriends, action)
        this._callSubscriber(this._state)*/
/*        if (action.type === 'ADD-POST') {
            let newPost = {
                id: this._state.profilePage.posts.length + 1,
                message: this._state.profilePage.newPostText,
                likesCount: 14
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state)
        } else if (action.type === "UPDATE-TEXT") {
            this._state.profilePage.newPostText = action.text;
            this._callSubscriber(this._state)
        } else if (action.type === NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newMessage
            this._callSubscriber(this._state)
        } else if (action.type === ADD_NEW_MESSAGE) {

            this._state.dialogsPage.messages.push(
                {
                    message: this._state.dialogsPage.newMessageText,
                    id: this._state.dialogsPage.messages.length.toString(),

                    messageRight: !this._state.dialogsPage.messages[this._state.dialogsPage.messages.length - 1].messageRight
                })
            this._callSubscriber(this._state)
        }*/
/*
    }
}
*/


//////////////////////////////////////


//////////////////////////////////////

/*

export default store
*/


/*let state = {
    profilePage: {
        posts: [
            {id: 1, message: "It`s my first post!", likesCount: 4},
            {id: 2, message: "IT-incubator", likesCount: 89},
            {id: 3, message: "Post", likesCount: 454},
            {id: 4, message: "Kabzda kak prosto!!", likesCount: 7},
        ],

        newPostText: 'it-incubator'
    },
    dialogsPage: {
        messages: [
            {message: 'Hi', id: '1', messageRight: false},
            {message: 'Hi bro!', id: '2', messageRight: true},
            {message: 'How are you?', id: '3', messageRight: false},
            {message: 'I`m fine.', id: '4', messageRight: true},
            {message: 'It`s good. ', id: '5', messageRight: false}
        ],

        dialogs: [
            {name: 'Sasha', id: '1', img: icon2},
            {name: 'Lena', id: '2', img: icon3},
            {name: 'Leha', id: '3', img: icon4},
            {name: 'Viktor', id: '4', img: icon5},
        ]
    },
    sideBarFriends: {
        friends: [
            {img: icon2, id: '5'},
            {img: icon3, id: '6'},
            {img: icon4, id: '7'},
        ]
    }
}
*/

/*export const addPost = () => {

    let newPost = {
        id: state.profilePage.posts.length + 1,
        message: state.profilePage.newPostText,
        likesCount: 14
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = "";
    rerenderEntireTree(state)
}*/

/*export const upText = (text: string) => {
    state.profilePage.newPostText = text;
    rerenderEntireTree(state)
}*/

/*export const subscribe = (observer: any) => {
    rerenderEntireTree = observer
}*/

