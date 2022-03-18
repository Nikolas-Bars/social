import {ActionTypes, DialogsPageType} from "./store";
import icon2 from "../img/iconsForDialogs/icon2.jpg";
import icon3 from "../img/iconsForDialogs/icon3.jpg";
import icon4 from "../img/iconsForDialogs/icon4.jpg";
import icon5 from "../img/iconsForDialogs/icon5.jpg";

const NEW_MESSAGE_TEXT = "NEW_MESSAGE_TEXT"
const ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE"



let initialState = {
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
}

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionTypes) => {

    switch (action.type) {
        case "NEW_MESSAGE_TEXT":
            state.newMessageText = action.newMessage
            return state
        case "ADD_NEW_MESSAGE":
            state.messages.push(
                {
                    message: state.newMessageText,
                    id: state.messages.length.toString(),
                    messageRight: !state.messages[state.messages.length - 1].messageRight
                })
            return state
        default:
            return state
    }






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

    return state
}

export let NewMessageTextActionCreator = (text: string) => ({type: NEW_MESSAGE_TEXT, newMessage: text}as const)

export let addNewMessageActionCreator = () => ({type: ADD_NEW_MESSAGE}as const)

export default dialogsReducer
