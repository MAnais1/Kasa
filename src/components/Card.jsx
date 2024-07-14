import PropTypes from 'prop-types';
import '../sass/Card.scss'
import { Link } from "react-router-dom";

function Card({locations}) {
    return(
        locations.map((location)=>(
            <Link to={`/location/${location.id}`} className='Card' key={location.id}>
                <img src={location.cover} alt={location.title}></img>
                <div className='titre'>
                <h3>{location.title}</h3>
                </div>
            </Link>
        ))
        
    )
};
Card.propTypes={
    locations: PropTypes.array.isRequired
}
export default Card;