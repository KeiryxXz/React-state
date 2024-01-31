import React, { Component } from 'react';
import './App.css';

class TimeElapsedComponent extends Component {
  constructor(props) {
    super(props);
    // Initialize state to keep track of elapsed time
    this.state = {
      elapsedTime: 0,
    };
  }

  componentDidMount() {
    // Set up an interval to update elapsed time every second
    this.intervalId = setInterval(this.updateElapsedTime, 1000);
  }

  componentWillUnmount() {
    // Clear the interval to prevent memory leaks when the component is unmounted
    clearInterval(this.intervalId);
  }

  updateElapsedTime = () => {
    // Update elapsed time using a functional state update for accuracy
    this.setState((prevState) => ({
      elapsedTime: prevState.elapsedTime + 1,
    }));
  };

  render() {
    return (
      <div className="elapsedTime">
        {/* Display the elapsed time */}
        <p>Time elapsed: {this.state.elapsedTime}</p>
      </div>
    );
  }
}

export default TimeElapsedComponent;