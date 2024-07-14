import { useParams } from "react-router-dom";
import locations from "../data/logements.json";
import CareScale from "../components/CareScale";
import Slideshow from "../components/Slideshow";
import "../sass/Location.scss"

function locationData(id) {
  return locations.find((location) => location.id === id);
}


function Location() {
  const { id } = useParams();
  const location = locationData(id);
  return (
    <div>
      <div className="slideshow">
        <Slideshow pictures={location.pictures}/>
      </div>
      <div className="title-host">
        <h1>{location.title} </h1>
        <div className="host">
          <p className="host-name">{location.host.name}</p>
          <img src={location.host.picture} alt={location.host.name} />
        </div>
      </div>
      <p>{location.location}</p>
      <div className="tags-rating">
        <div className="tag">
          <ul>
            {location.tags.map((tag) => (
              <li key={location.tags}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="rating">
            <CareScale scaleValue={location.rating}/>
        </div>
      </div>
      <div className="description-equipments">
        <div className="description">
          <h3>Description</h3>
          <p>{location.description}</p>
        </div>
        <div className="equipments">
          <h3>Équipements</h3>
          <ul>
            {location.equipments.map((equipment) => (
              <li key={location.equipment}>{equipment}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Location;
