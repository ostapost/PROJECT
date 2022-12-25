import { NavLink } from "react-router-dom"
import s from "./Navbar.module.css"
function Navbar() {
return(
  <ul className={s.nav_list}>
    <li  className={s.item}><NavLink to ="/profile"  >Profill</NavLink></li>
    <li className={s.item}><NavLink to ="/dialogs" >Dialogs</NavLink></li>
    <li className={s.item}><NavLink to ="/photo" >Photo</NavLink></li>
    <li className={s.item}><NavLink to  ="/contact" >Contact</NavLink></li>
  </ul>
)

}
export default Navbar
    