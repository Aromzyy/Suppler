// Importing necessary libraries and components
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './components/HomePage';

/**
 * App Component
 *
 * This is the main App component that wraps the entire application
 * inside the React Router's Router component. Currently, it only renders
 * the HomePage component, but it can be expanded to include more routes
 * and components in the future.
 */

function App() {
  return (
    <Router>
      <div>
        {/* This div can be used to wrap multiple components if needed in the future */}
        <div>
          <HomePage />  {/* Rendering the HomePage component */}
        </div>
      </div>
    </Router>
  );
}

// Exporting the App component to be used in other parts of the application
export default App;
