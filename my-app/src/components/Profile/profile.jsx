import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts"
import ProfileInfo from "./ProfileInfo/ProfileInfo"


function Profile(props) {
    return (

        <div className={s.profile}>

           <ProfileInfo />
            <MyPosts
                posts={props.profilePage.posts}
                addPost={props.addPost} 
                newPostText={props.profilePage.newPostText}
                updateNewPostText={props.updateNewPostText}

            />
        </div>
    )
}

export default Profile