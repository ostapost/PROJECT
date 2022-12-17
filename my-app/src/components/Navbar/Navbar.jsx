import s from "./Navbar.module.css"

function Navbar() {
return(
  <ul className={s.nav_list}>
    <li className={s.item}>Profill</li>
    <li className={s.item}>About</li>
    <li className={s.item}>Photo</li>
    <li className={s.item}>Contact</li>
  </ul>
)

}
export default Navbar
    