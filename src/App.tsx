import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {ProfilePage} from "./Components/ProfilePage/ProfilePage";

function App() {
    return (
        <div className="appWrapper">
            <Header/>
            <Navbar/>
            <ProfilePage/>
        </div>
    );
}

export default App;
