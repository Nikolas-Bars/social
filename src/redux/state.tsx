import icon2 from '../img/iconsForDialogs/icon2.jpg'
import icon3 from '../img/iconsForDialogs/icon3.jpg'
import icon4 from '../img/iconsForDialogs/icon4.jpg'
import icon5 from '../img/iconsForDialogs/icon5.jpg'

let state = {
    profilePage: {
    posts: [
        {id: 1, message: "It`s my first post!", likesCount: 4},
        {id: 2, message: "Kabzda kak prosto!", likesCount: 89},
        {id: 3, message: "Post", likesCount: 454},
        {id: 4, message: "it-incubator!", likesCount: 7},
    ]
    },
    dialogsPage: {
        messages: [
            {message: 'Hi', id: '1',  messageRight: false},
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

export const addPost =(newPostText: string) =>{
    state.profilePage.posts.push(
        {id: state.profilePage.posts.length + 1, message: newPostText, likesCount: 14}
        )
}

export default state