// import styles from "./HomePage.module.css";
import React, { useEffect } from "react";
import {TopPage} from "./top_page/TopPage.js";
import { BodyPage } from "./body_page/BodyPage.js";
import { EndPage } from "./end_page/EndPage.js";
import {useState} from 'react';



function HomePage({api, saveContactDetails}) {

  const [roadTripData, setRoadTripData] = useState([]);

  /*
  func to fetch the road trip data from the server
  */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api + 'roadTrips'); // fetch data from the server
        if (response.ok) { // if response is ok, set the road trip data
          const data = await response.json();
          setRoadTripData(data);
          console.log(data);
          
        }else{
          console.error('Failed to fetch data: ', response.statusText);
        }
        
      } catch (error) {
        console.error('Failed to fetch data: ', error);
      }
    };
    fetchData();
  }, [api]);

  return (
    <div className="container-fluid" >
        
        {/* part for the start page, include the
            background img, slides and the nav-bar */}
        <TopPage />

         {/* part for the body, include the
            main clip, the area nav, and all the road trip
            by order by area */}
       <BodyPage roadTripData={roadTripData} saveContactDetails={saveContactDetails} />

      {/* part for the end page, include
          the contact inforamtion*/}
       <EndPage saveContactDetails={saveContactDetails}/>

    </div>
  );
}
export { HomePage };