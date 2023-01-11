import React from 'react';
import c from './Post.module.css'

export type PostPropsType = {
    message: string
    likeCount: number
}

export const Post = (props:PostPropsType) => {
    return (
                <div className={c.item}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgIIoJD88Syn4D84wGe4Fy3C-wpxM6JJhgXg&usqp=CAU"/>
                    {props.message}
                    <div>
                        <span>likes {props.likeCount}</span>
                    </div>
                </div>
    )
}