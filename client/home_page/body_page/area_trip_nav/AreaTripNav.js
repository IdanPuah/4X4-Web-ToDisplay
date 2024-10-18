import React, { useState, useEffect, useCallback, useMemo } from 'react';
import styles from "./AreaTripNav.module.css";

function AreaTripNav() {
  const [activeSection, setActiveSection] = useState('aboutMe'); // Initial active section

  // List of sections to be used for navigation
  const sections = useMemo(() => ['aboutMe', 'north', 'center', 'south', 'contact'], []);

  // use callback to prevents unnecessary re-creations of the function on each render
   const handleScroll = useCallback(() => {
    
      let currentSection = activeSection;
      const scrollPosition = window.scrollY; // vertical scroll position of the window (in pixels), how far the user has scrolled down the page
      const windowHeight = window.innerHeight; // height of the browser window (viewport) in pixels
      const documentHeight = document.body.scrollHeight; // total height of the document (the entire web page)
    
      /*
      Loops through each section ID in the sections array. 
      This allows the function to check the visibility of each section as the user scrolls
      */
      sections.forEach((section) => {
        const element = document.getElementById(section); // DOM element of the section
        if (element) {
          const sectionOffset = element.offsetTop; // indicates where the section begins on the page
          const sectionHeight = element.offsetHeight; // height of the section element
          
          // Check if at least 50% of the section is visible
          if (
            scrollPosition + windowHeight >= sectionOffset + sectionHeight / 2 &&
            scrollPosition < sectionOffset + sectionHeight / 2
          ) {
            currentSection = section;
          }
        }
      });
    
      /* 
      Dynamically handle the last section based on array order
      */
      const lastSection = sections[sections.length - 1];
      const threshold = 50; // Allow some leeway for bottom detection
      if (scrollPosition + windowHeight >= documentHeight - threshold) {
        currentSection = lastSection; // Set to the last section dynamically
      }
    
      /*
      Update active section only if it changes
      */
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
  }, [activeSection, sections]);



    /*
    UseEffect to register the scroll event
    The effect runs after the initial render and after every 
    update where the dependencies have changed
    */
    useEffect(() => {
        // registers an event listener on the window object that listens for the scroll event
        window.addEventListener('scroll', handleScroll);
        
        // Cleanup the event listener on unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);



  // Function to handle navigation clicks
  const handleNavigation = (section) => {
    const element = document.getElementById(section);
    if (element) {
      const navbar = document.querySelector('.navbar'); // Select the navbar element
      const offset = navbar ? (navbar.offsetHeight + 500) : 0; // Get the navbar height dynamically + offset, or set to 0 if not found
      const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;

      // Scroll to the section smoothly
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={`row sticky-top`}>
      <nav className={`${styles.navbarCustom} navbar navbar-expand navbar-light bg-light`}>
        <div className={`container-fluid justify-content-center`}>
          <ul className="navbar-nav">
            {sections.map((section) => (
              <li className={`nav-item  ${styles.liCustom}`} key={section}>
                <a
                  className={`${styles.navLink} ${activeSection === section ? styles.active : ''}`}
                  href={`#${section}`}
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default anchor behavior
                    handleNavigation(section);
                  }}
                >
                  {section === 'aboutMe' && 'קצת על עצמי'}
                  {section === 'north' && 'מסלולים בצפון'}
                  {section === 'center' && 'מסלולים במרכז'}
                  {section === 'south' && 'מסלולים בדרום'}
                  {section === 'contact' && 'יצירת קשר'}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export { AreaTripNav };
