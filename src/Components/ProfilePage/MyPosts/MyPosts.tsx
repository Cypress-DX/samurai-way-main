import React, {ChangeEvent, ChangeEventHandler} from 'react';
import c from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostItemType} from "../../../Redux/state";

export type MyPostsPropType = {
    postData: Array<PostItemType>
    addPost: ()=>void
    newPostElement: string
    updatePost: (newPost:string)=>void
}

export const MyPosts = (props:MyPostsPropType) => {

    let posts = props.postData.map(p=><Post message={p.message} likeCount={p.likeCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        if (props.newPostElement.trim()) {
            props.addPost()
        }
    }

    let updatePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updatePost(e.currentTarget.value)
    }

    return (
        <div className={c.posts}>
            my posts
            <div className={c.item}>
                <textarea ref={newPostElement} value={props.newPostElement} onChange={updatePostHandler}/>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            {posts}
        </div>
    )
}