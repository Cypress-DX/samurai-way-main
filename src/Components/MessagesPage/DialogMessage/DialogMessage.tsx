import {MessageItemType} from "../../../Redux/state";

export const DialogMessage = (props: MessageItemType) => {
    return (
        <div className="message">{props.message}</div>
    )
}