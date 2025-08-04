# Online Library System

My React library app for browsing and managing books. Built with React, Redux, and React Router.

## How to Run

### What you need:
- Node.js
- npm

### Setup:

1. Clone this repo:
   ```bash
   git clone <repository-url>
   cd online-library-system-development
   ```

2. Install stuff:
   ```bash
   npm install
   ```

3. Run it:
   ```bash
   npm start
   ```

4. Open http://localhost:3000 in your browser

### Build for production:
```bash
npm run build
```

## Features

### 1. Home Page
- Landing page with welcome message
- List of book categories (Fiction, Non-Fiction, Sci-Fi)
- Display of popular books with links to view details
- Navigation bar with links to "Home", "Browse Books", and "Add Book"

### 2. Browse Books Page
- Display books filtered by category using dynamic routing (`/books/:category`)
- Search functionality to filter books by title or author
- Each book has a "View Details" link to the Book Details page
- Uses dummy data for the book collection

### 3. Book Details Page
- Dynamic route displaying detailed information about a selected book
- Shows book title, author, description, and rating
- "Back to Browse" link to return to Browse Books page

### 4. Add Book Page
- Form for adding new books to the library
- Redux state management for the books list
- Form validation to ensure all fields are filled correctly
- Redirects to Browse Books page after successful submission

### 5. 404 Page
- "Page Not Found" route for undefined routes
- Link back to the Home page

## Technology Stack

- **React** - Frontend framework
- **Redux** - State management
- **React Router** - Client-side routing
- **Vite** - Build tool and development server

## Project Structure

```
src/
├── components/
│   ├── Header.jsx         # Navigation component
│   ├── BookCard.jsx       # Book display component
│   └── AddBookForm.jsx    # Form for adding books
├── pages/
│   ├── HomePages.jsx      # Home page
│   ├── BrowseBooksPage.jsx# Browse books with search
│   ├── BookDetailsPage.jsx# Individual book details
│   ├── AddBookPage.jsx    # Add new book
│   └── NotFoundPage.jsx   # 404 error page
├── redux/
│   ├── store.js          # Redux store
│   └── actions.js        # Redux actions
├── App.jsx               # Main app with routing
└── index.jsx             # App entry point
```
