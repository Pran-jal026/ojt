import React from 'react';
import Header from '../components/header/Header'; // Import the Header

const NotFoundPage = () => {
  return (
    <div>
      <Header /> {/* Header added here */}

      <div className="page-not-found">
        <h2>404 - Page Not Found</h2>
        <p>The page you're looking for doesn't exist.</p>
      </div>
    </div>
  );
};

export default NotFoundPage;

