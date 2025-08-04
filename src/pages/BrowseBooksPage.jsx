import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BookCard from '../components/BookCard.jsx';

const BrowseBooksPage = () => {
  const { category } = useParams();
  const books = useSelector(state => state.books);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter by category
  let filteredBooks = books;
  if (category) {
    filteredBooks = books.filter(book => 
      book.category.toLowerCase() === category.toLowerCase()
    );
  }

  // Filter by search
  if (searchTerm) {
    filteredBooks = filteredBooks.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  const getPageTitle = () => {
    if (category) {
      return `${category} Books`;
    }
    return 'All Books';
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>{getPageTitle()}</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search by title or author..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            width: '300px',
            maxWidth: '100%'
          }}
        />
      </div>

      <p style={{ marginBottom: '20px', color: '#666' }}>
        Found {filteredBooks.length} book{filteredBooks.length !== 1 ? 's' : ''}
      </p>

      {filteredBooks.length === 0 ? (
        <div style={{ 
          textAlign: 'center', 
          padding: '40px', 
          color: '#666',
          backgroundColor: '#f9f9f9',
          borderRadius: '8px'
        }}>
          <h3>No books found</h3>
          <p>Try adjusting your search terms or browse a different category.</p>
        </div>
      ) : (
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'flex-start'
        }}>
          {filteredBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowseBooksPage;
