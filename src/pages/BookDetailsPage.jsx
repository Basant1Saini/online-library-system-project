import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

const BookDetailsPage = () => {
  const { id } = useParams();
  const books = useSelector(state => state.books);
  const book = books.find(b => b.id === parseInt(id));

  if (!book) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Book Not Found</h2>
        <p>The book you're looking for doesn't exist.</p>
        <Link to="/books" style={{ color: '#007bff' }}>← Back to Browse Books</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <Link to="/books" style={{ color: '#007bff', textDecoration: 'none', marginBottom: '20px', display: 'inline-block' }}>
        ← Back to Browse Books
      </Link>
      
      <div style={{ 
        backgroundColor: 'white', 
        padding: '30px', 
        borderRadius: '8px', 
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)' 
      }}>
        <h1 style={{ color: '#333', marginBottom: '10px' }}>{book.title}</h1>
        <h2 style={{ color: '#666', fontWeight: 'normal', marginBottom: '20px' }}>by {book.author}</h2>
        
        <div style={{ marginBottom: '20px' }}>
          <span style={{ 
            display: 'inline-block', 
            backgroundColor: '#007bff', 
            color: 'white', 
            padding: '4px 12px', 
            borderRadius: '20px', 
            fontSize: '14px',
            marginRight: '10px'
          }}>
            {book.category}
          </span>
          <span style={{ color: '#666' }}>Rating: {book.rating}/5 ⭐</span>
        </div>
        
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '20px', 
          borderRadius: '6px', 
          marginBottom: '20px' 
        }}>
          <h3 style={{ marginTop: '0', color: '#333' }}>Description</h3>
          <p style={{ lineHeight: '1.6', color: '#555', margin: '0' }}>{book.description}</p>
        </div>
        
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <Link 
            to={`/books/${book.category.toLowerCase()}`}
            style={{
              padding: '10px 20px',
              backgroundColor: '#28a745',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
              display: 'inline-block'
            }}
          >
            More {book.category} Books
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
