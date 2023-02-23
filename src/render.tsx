import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, RootStateType, updateMessageText, updatePostText} from "./Redux/state";

export const rerenderEntireTree = (state:RootStateType) => {
    ReactDOM.render(
        <App
            state={state}
            addPost={addPost}
            updatePost={updatePostText}
            updateMessageText={updateMessageText}
            addMessage={addMessage}
        />,
        document.getElementById('root')
    );
}
