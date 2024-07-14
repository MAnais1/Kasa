import logoFooter from "../assets/logo-footer.svg"
import "../sass/Footer.scss";

function Footer() {
    return(
    <div className="Footer">
         <img src={logoFooter} className="logo" alt="logo" />
         <p>© 2020 Kasa. All rights reserved</p>
    </div>
    )
}
export default Footer;