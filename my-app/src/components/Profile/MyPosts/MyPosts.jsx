import s from "./MyPosts.module.css"
import Post from "./Post/Post"
function MyPosts(props) {
    // let PostData = [
        //     { id: 1, message: 'Hi, how are you?' , likeCount:12},
        //     { id: 2, message: 'It\'s my first post!', likeCount:1 },
        //     { id: 3, message: 'kur-kru', likeCount:1 },
        //     { id: 4, message: 'Blabla!', likeCount:2 },
        // ]
        
        console.log(props.PostData)
        
        let postArr = props.posts.map(p => 
            <Post message={p.message} like={p.likeCount} />
            )
    
    return (


        <div className={s.MyPosts}>

            <h3>MY POST</h3>
            <textarea></textarea>
            <button className={s.button}>Add post</button>
            <div className={s.posts}>

        {postArr}

            </div>
        </div>
    )
}

export default MyPosts