import "../sass/Nav.scss";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <ul className="Nav">
      <NavLink to="/" className={({isActive})=>(isActive ? "underlineOn" : "underlineOff")}>
        <li>Accueil</li>
      </NavLink>
      <NavLink to="/about" className={({isActive})=>(isActive ? "underlineOn" : "underlineOff")}>
        <li>A Propos</li>
      </NavLink>
    </ul>
  );
}
export default Nav;
