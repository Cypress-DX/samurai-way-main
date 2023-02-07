import c from "./MessagesPage.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogMessage} from "./DialogMessage/DialogMessage";
import {MessagesPageType} from "../../Redux/state";
import React from "react";

export type MessagesPagesPropsType = {
    messagesPage: MessagesPageType
}

export const MessagesPage = (props: MessagesPagesPropsType) => {
    let dialogElements = props.messagesPage.dialogData.map(d => <DialogItem id={d.id}  name={d.name}/>)
    let messageElements = props.messagesPage.messageData.map(m => <DialogMessage message={m.message} id={m.id}/>)

    let newMessageElement = React.createRef<HTMLTextAreaElement>();
    let addNewMessage = () => {
        let message = newMessageElement.current?.value
        alert(message)
    }

    return (
        <div className={c.dialogs}>
            <div className={c.dialogItems}>
                {dialogElements}
            </div>
            <div className={c.messages}>
                {messageElements}
            </div>
            <div>
                <textarea ref={newMessageElement}></textarea>
                <button onClick={addNewMessage}>send</button>
            </div>
        </div>
    )
}