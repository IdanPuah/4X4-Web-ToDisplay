import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import {HomePage} from './home_page/HomePage.js';
import {RoadTripPage} from './roadTrip_page/RoadTripPage.js';

function App() {
  const API = 'http://********/api/';
  
  
  /*
  func to save the contact details to the server
  the func call when submit the contact form
  and will pass to the components including the form
  */
  const saveContactDetails = async (firstName, lastName, phone, email, roadTripName) => {
    // Send a POST request to the server to save the contact details
    try {
      const response = await fetch(API + 'clientDetails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, phone, email, roadTripName }),
      });
      // Check if the request was successful and return true if so
      if (response.ok) {
        const data = await response.json();
        console.log('Contact details saved:', data);
        return true;
      } else {
        const errorData = await response.json(); // Get error details from response
        console.error('Failed to save contact details:', errorData.message || response.statusText);
        return false; // Return false on failure
      }
    } catch (error) {
      console.error('Failed to save contact details:', error);
      return false; // Return false on failure
    }
  }

  const getRoadTripPage = async (id) => {
    
    try {
      const response = await fetch(API + 'roadTrip/' + id, {
        method: 'GET' // Explicitly specify the GET method
      });
      if (response.ok) {
        const roadTripPage = await response.json();
        return roadTripPage;
      } else {
        const errorData = await response.json();
        console.error('Failed to get road trip:', errorData.message || response.statusText);
        return null;
      }
    } catch (error) {
      console.error('Failed to get road trip:', error);
      return null;
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage api={API} saveContactDetails={saveContactDetails} />} />
        <Route path="/RoadTrip/:id" element={<RoadTripPage getRoadTripPage={getRoadTripPage} saveContactDetails={saveContactDetails}/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
