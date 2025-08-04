import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      padding: '60px 20px',
      textAlign: 'center',
      minHeight: '60vh'
    }}>
      <h1 style={{ fontSize: '6rem', margin: '0', color: '#ddd' }}>404</h1>
      <h2 style={{ color: '#333', marginBottom: '10px' }}>Page Not Found</h2>
      <p style={{ color: '#666', marginBottom: '30px', maxWidth: '400px' }}>
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        to="/"
        style={{
          padding: '12px 24px',
          backgroundColor: '#007bff',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px',
          display: 'inline-block'
        }}
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
