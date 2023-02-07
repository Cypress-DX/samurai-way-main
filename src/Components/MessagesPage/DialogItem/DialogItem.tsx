import c from "../MessagesPage.module.css";
import {NavLink} from "react-router-dom";
import {DialogItemType} from "../../../Redux/state";

export const DialogItem = (props: DialogItemType)  => {
    return (
        <div className={c.item}>
            <NavLink to={'/dialogs/' + props.id}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTApbxj4499GJJWMYvKUVnzMUBJBt1b_Aob0A&usqp=CAU" alt=""/>
                {props.name}
            </NavLink>
        </div>
    )
}