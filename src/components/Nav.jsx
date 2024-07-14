import '../sass/Nav.scss';
import { NavLink } from "react-router-dom";

function Nav (){
    return(
        <ul className="Nav">
            <NavLink to='/'><li>Accueil</li></NavLink>
            <NavLink to='/about'><li>A Propos</li></NavLink>
         </ul>
    )
}
export default Nav;