import styles from "./RoadTripCard.module.css";
import { useNavigate } from 'react-router-dom';

function RoadTripCard( {...roadTrip} ) {
    const navigate = useNavigate();

    const id = roadTrip._id;
    const name = roadTrip.title;
    const description = roadTrip.shortDescription;
    const img = roadTrip.img;
    console.log('Image Source:', img);


    const handleClickTrip = () => {
        // Navigate to the RoadTripPage immediately
        navigate('/roadTrip/' + id);
    };

    return (
        <div className={`card ${styles.cardContainer}`} onClick={handleClickTrip}>
            <img src={img} className="card-img-top" alt={name} />
            <div className={`card-body ${styles.cardBody}`}>
                <h4 className={`card-title text-start ${styles.cardTitle}`}>{name}</h4>
                <p className="text-start">{description}</p>
            </div>
        </div>
    );
}
export { RoadTripCard };