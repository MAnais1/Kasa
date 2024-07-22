import { Link } from "react-router-dom";
import "../sass/Error.scss";

function Error() {
  return (
    <div className="error">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <p className="return">
        <Link to="/">Retourner sur le page d'accueil</Link>
      </p>
    </div>
  );
}
export default Error;
