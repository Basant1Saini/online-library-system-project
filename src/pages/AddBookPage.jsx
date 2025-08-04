import React from 'react';
import AddBookForm from '../components/AddBookForm.jsx';

const AddBookPage = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5', minHeight: '80vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>
          Add New Book
        </h1>
        <p style={{ textAlign: 'center', marginBottom: '30px', color: '#666' }}>
          Fill out the form below to add a new book to the library collection.
        </p>
        <AddBookForm />
      </div>
    </div>
  );
};

export default AddBookPage;
