import logo from "../assets/logo.svg";
import "../sass/Header.scss";
import Nav from "./Nav"

function Header() {
    return(
    <div className="Header">
         <img src={logo} className="logo" alt="logo" />
         <Nav/>
    </div>
    )
}
export default Header;