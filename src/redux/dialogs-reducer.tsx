import {ActionTypes, DialogsPageType} from "./state";

const NEW_MESSAGE_TEXT = "NEW_MESSAGE_TEXT"
const ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE"

const dialogsReducer = (state: DialogsPageType, action: ActionTypes) => {

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
