import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let messagesData = [
    {message: 'Hi', id: '1'},
    {message: 'How are you?', id: '2'},
    {message: 'What is your name?', id: '3'},
    {message: 'I love to eat!', id: '4'},
]

let dialogsData = [
    {name: 'Sasha', id: '1'},
    {name: 'Lena', id: '2'},
    {name: 'Leha', id: '3'},
    {name: 'Viktor', id: '4'},
]

let posts = [
    {id: 1, message: "It`s my first post!", likesCount: 4},
    {id: 2, message: "Kabzda kak prosto!", likesCount: 89},
    {id: 3, message: "Post", likesCount: 454},
    {id: 4, message: "it-incubator!", likesCount: 7},
]


ReactDOM.render(
  <React.StrictMode>
    <App messagesData={messagesData} dialogsData={dialogsData} posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
