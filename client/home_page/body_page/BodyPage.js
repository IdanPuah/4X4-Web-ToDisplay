// import styles from './BodyPage.module.css';
import {FormContact} from "./form_contact/FormContact.js";
import {AreaTripNav} from "./area_trip_nav/AreaTripNav.js";
import {Introduction} from "./introduction/Introduction.js";
import {RoadTripArea} from "./road_area/RoadTripArea.js";

function BodyPage({roadTripData, saveContactDetails}) {

    // const [roadTripData] = useState(roadTripJson);

    return (
    <>
        {/* part for set the option to put contact details*/}
        <FormContact saveContactDetails={saveContactDetails}/>
        
        {/* Navigation Bar Below the Video Clip */}
        <AreaTripNav />

        {/* Introduction */}
        <Introduction />

        {/* The road trips by areas */}

        {/* North */}

        <RoadTripArea roadTripData={roadTripData} area={"north"} areaTitle={"מסלולים בצפון"} />

        {/* Center */}

    
        <RoadTripArea roadTripData={roadTripData} area={"center"} areaTitle={"מסלולים במרכז"} />

        {/* South */}

        <RoadTripArea roadTripData={roadTripData} area={"south"} areaTitle={"מסלולים בדרום"} />

    </>
    );
}
export {BodyPage};