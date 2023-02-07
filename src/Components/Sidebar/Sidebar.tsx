import React from 'react';
import c from './Sidebar.module.css'
import {NavLink} from "react-router-dom";
import {SidebarType} from "../../Redux/state";
import {Friends} from "../Friends/Friends";

export const Sidebar = (props: SidebarType) => {
    return (
        <nav className={c.nav}>
            <div className={`${c.item} ${c.active}`}>
                <NavLink to="/ProfilePage" activeClassName={c.active}>Profile</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/MessagesPage" activeClassName={c.active}>Messages</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/News" activeClassName={c.active}>News</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/Music" activeClassName={c.active}>Music</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/Settings" activeClassName={c.active}>Settings</NavLink>
            </div>
                <Friends
                    friends={props.friends}/>

        </nav>
    )
}