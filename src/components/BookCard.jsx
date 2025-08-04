import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      margin: '10px',
      maxWidth: '300px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      backgroundColor: 'white'
    }}>
      <h3 style={{ margin: '0 0 8px 0', color: '#333' }}>{book.title}</h3>
      <p style={{ margin: '4px 0', color: '#666' }}><strong>Author:</strong> {book.author}</p>
      <p style={{ margin: '4px 0', color: '#666' }}><strong>Category:</strong> {book.category}</p>
      <p style={{ margin: '4px 0', color: '#666' }}><strong>Rating:</strong> {book.rating}/5</p>
      <p style={{ 
        margin: '8px 0', 
        fontSize: '14px', 
        color: '#555',
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden'
      }}>
        {book.description}
      </p>
      <Link 
        to={`/book/${book.id}`}
        style={{
          display: 'inline-block',
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px',
          marginTop: '8px',
          fontSize: '14px'
        }}
      >
        View Details
      </Link>
    </div>
  );
};

export default BookCard;
