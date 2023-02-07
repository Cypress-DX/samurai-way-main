import React from 'react';
import c from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostItemType} from "../../../Redux/state";

export type MyPostsPropType = {
    postData: Array<PostItemType>
}

export const MyPosts = (props:MyPostsPropType) => {

    let posts = props.postData.map(p=><Post message={p.message} likeCount={p.likeCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
       let text = newPostElement.current?.value;
       alert(text)
    }

    return (
        <div className={c.posts}>
            my posts
            <div className={c.item}>
                <textarea ref={newPostElement}></textarea>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            {posts}
        </div>
    )
}