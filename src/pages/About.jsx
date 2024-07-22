import ImgBanner from "../components/ImgBanner";
import img2 from "../assets/img-banner-a-propos.jpg";
import Collapse from "../components/Collapse";
import'../sass/About.scss'

function About() {
  return (
    <div>
      <ImgBanner name={img2} />
      <Collapse
        title="Fiabilité"
        texte={<p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>}
      />
      <Collapse
        title="Respect"
        texte={<p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>}
      />
      <Collapse
        title="Service"
        texte={<p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>}
      />
      <Collapse
        title="Sécurité"
        texte={<p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>}
      />
    </div>
  );
}
export default About;
