
import '../sass/Banner.scss'

function ImgBanner(props) {
  return (
    <div className="Banner">
      <img src={props.name} className="photoBanner" alt="paysage"></img>
      <h3>{props.text1}<br/>{props.text2}</h3>
    </div>
  );
}
export default ImgBanner;
