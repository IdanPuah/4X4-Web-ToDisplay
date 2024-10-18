import styles from "./RoadTripArea.module.css";
import { useEffect, useState } from "react";
import { RoadTripCard } from "../road_trip_card/RoadTripCard";

function RoadTripArea({ roadTripData, area, areaTitle }) {

    // State to hold filtered trips by area
    const [areaTrips, setAreaTrips] = useState([]);

    // Use useEffect to filter the data by area when component mounts or when area/roadTripData changes
    useEffect(() => {
        const filteredTrips = roadTripData.filter(trip => trip.area === area);
        setAreaTrips(filteredTrips);
    }, [roadTripData, area]);  // Add 'area' to the dependency array

    return (
        <div >
            <div className={`row ${styles.customRowBorder} `} id={area} >
                <h1 className={`${styles.areaTitle}`}>{areaTitle}</h1>
            </div>
            <div className={`container ${styles.customRow} ${styles.cardContainer}`} >
                <div className="row justify-content-center" >
                    {areaTrips.map((roadTrip, index) => (
                        <div className="col-12 col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center" key={roadTrip._id} >
                            <RoadTripCard  {...roadTrip} />
                        </div>
                    ))}
                </div>
            </div>
        </ div>
    );
}

export { RoadTripArea };