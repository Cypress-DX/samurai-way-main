import React from 'react';
import c from './ProfilePage.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const ProfilePage = () => {
    return (
        <div className={c.content}>
            <div>
            </div>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPiegJ2BpyE_kAIzAD6eR-s4BwxUuvTYNrkw&usqp=CAU"/>

            <div>ava+description</div>
            <MyPosts/>
        </div>
    )
}