import {rerenderEntireTree} from "../render";

export type MessageItemType = {
    id: number
    message: string
}

export type DialogItemType = {
    id: number,
    name: string
}

export type FriendsItemType = {
    id: number,
    friendName: string
}

export type PostItemType = {
    id?: number,
    message: string,
    likeCount: number
}

export type ProfilePageType = {
    postData: Array<PostItemType>
    newPostText: string
}

export type MessagesPageType = {
    dialogData: Array<DialogItemType>
    messageData: Array<MessageItemType>
}

export type FriendsPageType = {
    friendsData: Array<FriendsItemType>
}

export type NavigationType = {
    id: number,
    pageName: string
}

export type FriendsSidebarType = {
    id: number,
    friendName: string
}

export type SidebarType = {
    navigation: Array<NavigationType>,
    friends: Array<FriendsSidebarType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    sidebar: SidebarType
}


export let state: RootStateType = {
    profilePage: {
        postData: [
            {id: 1, message: 'How are you doing?', likeCount: 0},
            {id: 2, message: 'Muy bien', likeCount: 3},
            {id: 3, message: 'Good to hear', likeCount: 1}],
        newPostText: 'It-kamasutra.com'
    },
    messagesPage: {
        dialogData: [
            {id: 1, name: 'Pele'},
            {id: 2, name: 'Messi'},
            {id: 3, name: 'Ronaldo'},
            {id: 3, name: 'Maradona'}],
        messageData: [
            {id: 1, message: 'Hola'},
            {id: 2, message: 'Hello'},
            {id: 3, message: 'Ca va?'}]
    },
    sidebar: {
        navigation: [
            {id: 1, pageName: "Profile"},
            {id: 2, pageName: "Messages"},
            {id: 3, pageName: "News"},
            {id: 4, pageName: "Music"},
            {id: 5, pageName: "Settings"},
        ],
        friends: [
            {id:1, friendName: "Pavel"},
            {id:2, friendName: "Solomon"},
            {id:3, friendName: "Nick"},
            {id:4, friendName: "Bob"},
        ]
    }
}

export let addPost = () => {
    let newPostItem: PostItemType = {
        id:5,
        message: state.profilePage.newPostText,
        likeCount: 0
    }
    state.profilePage.postData.push(newPostItem)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export let updatePostText = (newPostText: string) => {
    state.profilePage.newPostText = newPostText
    rerenderEntireTree(state)
}
