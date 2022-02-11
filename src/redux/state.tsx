import icon2 from '../img/iconsForDialogs/icon2.jpg'
import icon3 from '../img/iconsForDialogs/icon3.jpg'
import icon4 from '../img/iconsForDialogs/icon4.jpg'
import icon5 from '../img/iconsForDialogs/icon5.jpg'

let rerenderEntireTree =(state: typeof store.getState)=>{

} // переименуем в callSubscriber


type PostType = {
    id: number
    message: string
    likesCount: number
}
type MessagesType = {
    message: string
    id: string
    messageRight: boolean
}
type DialogsType = {
    name: string
    id: string
    img: string
}
type FriendsType = {
    img: string
    id: string
}
type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
type DialogsPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
}
type SideBarFriendsType = {
    friends: Array<FriendsType>
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sideBarFriends: SideBarFriendsType

}
export type StoreType = {
    _state: StateType,
    _callSubscriber: (state: StateType) => void
    subscribe: (observer: ObserverType) => void
    getState: ()=> StateType
    addPost:()=> void
    upText: (text: string)=> void
}
type ObserverType = (state: StateType) => void

let store: StoreType = {

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

    _callSubscriber(state){
        console.log('cat')
    },
    subscribe(observer){
        this._callSubscriber = observer
    },
    getState(){
        return this._state
    },

    addPost(){
        let newPost = {
            id: this._state.profilePage.posts.length + 1,
            message: this._state.profilePage.newPostText,
            likesCount: 14
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state)
    },
    upText(text: string){
        this._state.profilePage.newPostText = text;
        this._callSubscriber(this._state)
    },


}

export default store


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

