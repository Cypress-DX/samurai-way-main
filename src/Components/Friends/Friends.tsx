import {FriendsSidebarType} from "../../Redux/state";
import c from './Friends.module.css'

export type FriendsPropsType = {
    friends: Array<FriendsSidebarType>
}

export const Friends = (props: FriendsPropsType) => {
    let friendElement = props.friends.map(fr=>
    <div key={fr.id} className={c.friendElement}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK7JlurgQTj57W-GoZT4xnao2c50rgFeoQYA&usqp=CAU" alt="avatar"/>
            {fr.friendName}
    </div>
    )
    return (
        <div className={c.section}>
            <h2>Friends</h2>
            <div className={c.item}>{friendElement}</div>
        </div>
    )
}