import { NavLink } from "react-router-dom"
import s from "./Dialogs.module.css"

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/"+props.id}>{ props.name}</NavLink>
                </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.messages}</div>
        
        )
    } 



    const Dialogs = (props) => {
    let dialogArr = props.state.dialogsData.map((dialog) => 
        <DialogItem name={dialog.name} id={dialog.id} />
    )
    let messagesArr =props.state.messagesData.map((messag) => 
    <Message messages={messag.messages} id={messag.id} />
    )
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogArr}

            </div>
            <div className={s.messages}>
                {messagesArr}
            </div>
        </div>
    )
}

export default Dialogs