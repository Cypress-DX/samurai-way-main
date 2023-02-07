import React from 'react';
import c from './Post.module.css'
import {PostItemType} from "../../../../Redux/state";


export const Post = (props:PostItemType) => {
    return (
                <div className={c.item}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgIIoJD88Syn4D84wGe4Fy3C-wpxM6JJhgXg&usqp=CAU"/>
                    {props.message}
                    <div>
                        <span>like</span>{props.likeCount}
                    </div>
                </div>
    )
}