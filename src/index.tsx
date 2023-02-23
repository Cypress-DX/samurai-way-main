import React from 'react';
import './index.css';
import {state, subscriber} from "./Redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, RootStateType, updateMessageText, updatePostText} from "./Redux/state";

const rerenderEntireTree = (state:RootStateType) => {
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


rerenderEntireTree(state);

subscriber(rerenderEntireTree)