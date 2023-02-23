import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Sidebar} from "./Components/Sidebar/Sidebar";
import {ProfilePage} from "./Components/ProfilePage/ProfilePage";
import {MessagesPage} from "./Components/MessagesPage/MessagesPage";
import {BrowserRouter, Route, Router} from "react-router-dom";
import {Music} from "./Components/Music/Music";
import {News} from "./Components/News/News";
import {Settings} from "./Components/Settings/Settings";
import {addMessage, RootStateType} from "./Redux/state";


export type AppPropsType = {
    state: RootStateType
    addPost: () => void
    updatePost: (newPostText: string) => void
    addMessage: () => void
    updateMessageText: (newMessageText: string) => void
}

export type PostPropsType = {
    id?: number
    message: string
    likeCount: number
}


function App(props: AppPropsType) {

    return (
        <BrowserRouter>
            <div className="appWrapper">
                <Header/>
                <Sidebar
                    navigation={props.state.sidebar.navigation}
                    friends={props.state.sidebar.friends}
                />
                <div className={"appWrapperContent"}>
                    <Route
                        path='/profilePage'
                        render={() => <ProfilePage
                            profilePage={props.state.profilePage}
                            addPost={props.addPost}
                            updatePost={props.updatePost}
                        />}/>
                    <Route
                        path='/messagesPage'
                        render={() => <MessagesPage
                            messagesPage={props.state.messagesPage}
                            addMessage={props.addMessage}
                            updateMessageText={props.updateMessageText}
                        />}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
                {/*<ProfilePage/>*/}
            </div>
        </BrowserRouter>
    );
}

export default App;
