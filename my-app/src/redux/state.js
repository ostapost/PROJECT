import { rerenderEntireTree } from "../render"

let state = {
    profilePage: {        
        posts : [
    { id: 1, message: 'Hi, how are you?' , likeCount:12},
    { id: 2, message: 'It\'s my first post!', likeCount:1 },
    { id: 3, message: 'kur-kru', likeCount: 1 },
    { id: 4, message: 'Blabla!', likeCount: 2 },
        ],
    },
    
    dialogsPage: {
        messagesData : [
            { id: 1, messages: 'Hello' },
            { id: 2, messages: 'How are you ?' },
            { id: 3, messages: 'Yo' },
            { id: 4, messages: 'Yo' },
            { id: 5, messages: 'Yo' },
        ],
        dialogsData : [
            { id: 1, name: 'Ostap' },
            { id: 2, name: 'Vova' },
            { id: 3, name: 'Andry' },
            { id: 4, name: 'Victoria' },
            { id: 5, name: 'Ostap' },
        ],
    },
    


}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likeCount: 0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}

export default state