import React from 'react';
import c from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
            <div>
                my posts
                <div className={c.item}>
                    <textarea></textarea>
                    <button>Add Post</button>
                </div>
                <Post
                message={"How are you doing?"}
                likeCount={3}
                />
                <Post
                message={"Muy bien"}
                likeCount={4}/>
            </div>
    )
}