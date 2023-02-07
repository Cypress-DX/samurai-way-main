import React from 'react';
import c from './ProfilePage.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileDescription} from "./ProfileDescription";
import {ProfilePageType} from "../../Redux/state";

export type ProfilePagePropsType = {
    profilePage: ProfilePageType
}

export const ProfilePage = (props: ProfilePagePropsType) => {
    return (
        <div>
            <div>
            </div>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPiegJ2BpyE_kAIzAD6eR-s4BwxUuvTYNrkw&usqp=CAU"/>
            <ProfileDescription/>
            <MyPosts
            postData={props.profilePage.postData}/>
        </div>
    )
}