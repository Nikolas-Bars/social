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
            {message: 'Hi', id: '1'},
            {message: 'How are you?', id: '2'},
            {message: 'What is your name?', id: '3'},
            {message: 'I love to eat!', id: '4'},
        ],

         dialogs: [
            {name: 'Sasha', id: '1', img: icon2},
            {name: 'Lena', id: '2', img: icon3},
            {name: 'Leha', id: '3', img: icon4},
            {name: 'Viktor', id: '4', img: icon5},
        ]
    }
}

export default state