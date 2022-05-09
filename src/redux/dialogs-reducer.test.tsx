import {ActionTypes, DialogsPageType} from "./store";
import icon2 from "../img/iconsForDialogs/icon2.jpg";
import icon3 from "../img/iconsForDialogs/icon3.jpg";
import icon4 from "../img/iconsForDialogs/icon4.jpg";
import icon5 from "../img/iconsForDialogs/icon5.jpg";
import dialogsReducer, {addNewMessageActionCreator} from "./dialogs-reducer";

test('new message should be added', ()=>{
/*

    let initialState: DialogsPageType = {
        messages: [
            {message: 'Hi', id: '1', messageRight: false},
            {message: 'Hi bro!', id: '2', messageRight: true},
            {message: 'How are you?', id: '3', messageRight: false},
            {message: 'I`m fine.', id: '4', messageRight: true},
            {message: 'It`s good. ', id: '5', messageRight: false}
        ],

        newMessageText: "your new message",

        dialogs: [
            {name: 'Sasha', id: '1', img: icon2},
            {name: 'Lena', id: '2', img: icon3},
            {name: 'Leha', id: '3', img: icon4},
            {name: 'Viktor', id: '4', img: icon5},
        ]
    }

    let newState = dialogsReducer(initialState, addNewMessageActionCreator())

    expect(newState.messages.length).toBe(6)
    expect(newState.messages[5].message).toBe("your new message")


})

test('newMessageText', ()=>{

    let initialState: DialogsPageType = {
        messages: [
            {message: 'Hi', id: '1', messageRight: false},
            {message: 'Hi bro!', id: '2', messageRight: true},
            {message: 'How are you?', id: '3', messageRight: false},
            {message: 'I`m fine.', id: '4', messageRight: true},
            {message: 'It`s good. ', id: '5', messageRight: false}
        ],

        newMessageText: "your new message",

        dialogs: [
            {name: 'Sasha', id: '1', img: icon2},
            {name: 'Lena', id: '2', img: icon3},
            {name: 'Leha', id: '3', img: icon4},
            {name: 'Viktor', id: '4', img: icon5},
        ]
    }

    let newState = dialogsReducer(initialState, NewMessageTextActionCreator('test text'))

    expect(newState.newMessageText).toBe('test text')

*/


})