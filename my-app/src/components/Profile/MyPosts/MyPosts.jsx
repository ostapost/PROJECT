import s from "./MyPosts.module.css"
import Post from "./Post/Post"
import React from "react"
function MyPosts(props) {
        
        let postArr = props.posts.map(p => 
            <Post message={p.message} like={p.likeCount} />)
    
    let newPostElement = React.createRef()
    
    let addPost = () => {
    debugger
        let text = newPostElement.current.value
        props.addPost(text)
        props.updateNewPostText(" ")

    }
    
    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (

        <div className={s.MyPosts}>

            <h3>MY POST</h3>
            <textarea ref={newPostElement} onChange={onPostChange}  value={props.newPostText } />
            <button className={s.button} onClick={addPost}>Add post</button>
            <div className={s.posts}>

        {postArr}

            </div>
        </div>
    )
}

export default MyPosts