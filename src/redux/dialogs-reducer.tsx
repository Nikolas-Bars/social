import {ActionTypes, DialogsPageType} from "./store";
import icon2 from "../img/iconsForDialogs/icon2.jpg";
import icon3 from "../img/iconsForDialogs/icon3.jpg";
import icon4 from "../img/iconsForDialogs/icon4.jpg";
import icon5 from "../img/iconsForDialogs/icon5.jpg";

const ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE"




let initialState2 = {


    dialogs: [

        {
            name: 'Sasha', id: '1', img: icon2, messages: [
                {message: 'Hi Sasha', id: '1', messageRight: false},
                {message: 'Hi Loser!', id: '2', messageRight: true},
                {message: 'I love you!', id: '3', messageRight: false},
                {message: 'Fine. But... Fuck you!!!', id: '4', messageRight: true},
                {message: 'Bitch', id: '5', messageRight: false}
            ]
        },

        {
            name: 'Lena', id: '2', img: icon3, messages: [
                {message: 'Hi', id: '1', messageRight: false},
                {message: 'Hi bro!', id: '2', messageRight: true},
                {message: 'How are you?', id: '3', messageRight: false},
                {message: 'I`m fine.', id: '4', messageRight: true},
                {message: 'It`s good. ', id: '5', messageRight: false}
            ]
        },

        {
            name: 'Leha', id: '3', img: icon4, messages: [
                {message: 'Бро! Как сам?', id: '1', messageRight: false},
                {message: 'Как сала килограм', id: '2', messageRight: true},
                {message: 'До хера юморист чтоле?', id: '3', messageRight: false},
                {message: 'I`m енот, you are not', id: '4', messageRight: true},
                {message: 'Кабзда ', id: '5', messageRight: false}
            ]
        },

        {
            name: 'Viktor', id: '4', img: icon5, messages: [
                {message: 'Что посмотреть посоветуешь?', id: '1', messageRight: false},
                {message: 'Матрицу глянь', id: '2', messageRight: true},
                {message: 'Хм, а кто там в главной роли?', id: '3', messageRight: false},
                {message: 'Бондарчук', id: '4', messageRight: true},
                {message: 'Ооо, он топ! ', id: '5', messageRight: false}
            ]
        },
    ]
}

const dialogsReducer = (state: DialogsPageType = initialState2, action: ActionTypes) => {

    switch (action.type) {
        case "ADD_NEW_MESSAGE":

            return(
        {
                ...state,
                dialogs: state.dialogs.map(el => el.id === action.dialogID ? {...el, messages: [...el.messages, {
                        message: action.text,
                        id: el.messages.length.toString(),
                        messageRight: !el.messages[el.messages.length - 1].messageRight
                    }] } : el)})

        default:
            return state
    }

    return state
}

export let addNewMessageActionCreator = (dialogID: string, text: string) => ({type: ADD_NEW_MESSAGE, dialogID, text}as const)

export default dialogsReducer








/*let initialState = {
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
}*/

/*
    if (action.type === NEW_MESSAGE_TEXT) {
        state.newMessageText = action.newMessage

    } else if (action.type === ADD_NEW_MESSAGE) {

        state.messages.push(
            {
                message: state.newMessageText,
                id: state.messages.length.toString(),

                messageRight: !state.messages[state.messages.length - 1].messageRight
            })
    }*/