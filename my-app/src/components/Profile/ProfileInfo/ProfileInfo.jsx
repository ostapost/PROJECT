import s from "./ProfileInfo.module.css"
function ProfileInfo() {
    return (
            <div>
            <div className={s.header}></div>
            
            <div className={s.avatar}>
                Avatar + Description <br />
            </div>
            </div>
    )
}

export default ProfileInfo