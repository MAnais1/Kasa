import ImgBanner from "../components/ImgBanner";
import Card from '../components/Card';
import locations from '../data/logements.json';
import img1 from "../assets/img-banner-acceuil.jpg";
import '../sass/Home.scss';
const text1="Chez vous, ";
const text2="partout et ailleurs";

function Home() {
    return(
        <div>
            <ImgBanner name={img1} text1={text1} text2={text2}/>
            <div className="gallery">
                <Card locations={locations}/>
            </div>
        </div>
    )
    
}
export default Home;