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
        newPostElement.current.value = " "
    }
    
    return (

        <div className={s.MyPosts}>

            <h3>MY POST</h3>
            <textarea ref={newPostElement}></textarea>
            <button className={s.button} onClick={addPost}>Add post</button>
            <div className={s.posts}>

        {postArr}

            </div>
        </div>
    )
}

export default MyPosts