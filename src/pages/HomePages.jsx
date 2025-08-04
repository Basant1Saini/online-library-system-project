import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi'];
  const popularBooks = [
    { id: 1, title: 'The White Tiger', author: 'Aravind Adiga' },
    { id: 4, title: 'A Suitable Boy', author: 'Vikram Seth' },
    { id: 8, title: 'India After Gandhi', author: 'Ramachandra Guha' },
  ];

  return (
    <div>
      <h1>Welcome to the Online Library System</h1>
      <h2>Book Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category}>
            <Link to={`/books/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
      <h2>Popular Books</h2>
      <ul>
        {popularBooks.map(book => (
          <li key={book.id}>
            <Link to={`/book/${book.id}`}>{book.title}</Link> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
