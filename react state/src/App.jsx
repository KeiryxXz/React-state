// Import necessary dependencies
import React, { Component } from "react";
import "./App.css"; // Import your CSS file
import TimeElapsedComponent from './TimeElapsedComponent'; // Import TimeElapsedComponent

// Define the main App component
class App extends Component {
  // Constructor to initialize state
  constructor(props) {
    super(props);

    // Initial state with person details and shows flag
    this.state = {
      person: {
        fullName: "Thomas Shelby",
        bio: "He is a war-veteran from World War 1",
        imgSrc: "/src/assets/Thomas.webp",
        profession: "Politician gangster businessman soldier"
      },
      shows: false,
    };
  }

  // Click handler to toggle the shows state
  handleClick = () => {
    this.setState({shows: true});
  };

  // Render method to define the structure of the component
  render() {
    const {person, shows} = this.state;
    return (
      <>
        {/* Main container */}
        <div className="main">
          {/* Button to trigger the display */}
          {!shows && <button onClick={this.handleClick}>click here</button>}
          
          {/* Display content if shows is true */}
          {shows && (
            <div className="card">
              <img src={person.imgSrc} alt="Person" />
              <p>
                Full Name: {person.fullName}<br /><br />
                Bio: {person.bio}<br /><br />
                Profession: {person.profession}
              </p>
            </div>
          )}
        </div>

        {/* Display the TimeElapsedComponent */}
        <TimeElapsedComponent />
      </>
    );
  }
}

// Export the App component as the default export
export default App;