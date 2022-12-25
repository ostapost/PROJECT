import s from "./Post.module.css"
function Post(props, count){
    return (

        <div className={s.post}>

        <div className={s.avatar}></div>
            <div className={s.content}>
                {props.message}
            </div>
            <div className={s.like}>like
                <button>
                {props.like}
            </button>

            </div>
        </div>
    )
}

export default Post