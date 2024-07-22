import { Navigate, useNavigate, useParams } from "react-router-dom";
import locations from "../data/logements.json";
import CareScale from "../components/CareScale";
import Slideshow from "../components/Slideshow";
import "../sass/Location.scss";
import Collapse from "../components/Collapse";
import { useEffect } from "react";

function locationData(id) {
  return locations.find((location) => location.id === id);
}

function Location() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = locationData(id);
  console.log(id);
  console.log(location);
  useEffect(() => {
    if (!location) {
      navigate("/error");
     
    }
  }, [location,navigate]);
  if(!location){
    return null
  }

  return (
    <div className="location">
      <div className="slideshow">
        <Slideshow pictures={location.pictures} />
      </div>
      <div className="presentation">
        <div className="title-tags">
          <h1>{location.title} </h1>
          <p>{location.location}</p>
          <div className="tag">
            <ul>
              {location.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="host-rating">
          <div className="host">
            <p className="host-name">{location.host.name}</p>
            <img src={location.host.picture} alt={location.host.name} />
          </div>

          <div className="rating">
            <CareScale scaleValue={location.rating} />
          </div>
        </div>
      </div>

      <div className="description-equipments">
        <Collapse title="Description" texte={location.description} />
        <Collapse
          title="Équipements"
          texte={
            <ul>
              {location.equipments.map((equipment) => (
                <li key={equipment}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
}


export default Location;
