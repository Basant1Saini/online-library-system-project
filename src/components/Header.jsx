import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav style={{
      backgroundColor: '#333',
      padding: '1rem 0',
      marginBottom: '20px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        display: 'flex',
        gap: '2rem',
        alignItems: 'center',
        padding: '0 20px'
      }}>
        <Link 
          to="/" 
          style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '18px',
            fontWeight: 'bold',
            padding: '8px 16px',
            borderRadius: '5px',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#555'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          Home
        </Link>
        <Link 
          to="/books" 
          style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '18px',
            fontWeight: 'bold',
            padding: '8px 16px',
            borderRadius: '5px',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#555'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          Browse Books
        </Link>
        <Link 
          to="/add-book" 
          style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '18px',
            fontWeight: 'bold',
            padding: '8px 16px',
            borderRadius: '5px',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#555'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          Add Book
        </Link>
      </div>
    </nav>
  );
};

export default Header;
