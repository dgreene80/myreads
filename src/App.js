import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { getAll, update } from "./BooksAPI";
import MyShelves from "./MyShelves";
import Search from "./Search";
import "./App.css";

function App() {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    const getAllBooks = async () => {
      const books = await getAll();
      setAllBooks(books);
    };
    getAllBooks();
  }, []);
  
  const updateShelf = async (book, newShelf) => {
    await update(book, newShelf);
    book.shelf = newShelf;
    setAllBooks(allBooks.filter((b) => b.id !== book.id).concat(book));
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<MyShelves allBooks={allBooks} updateShelf={updateShelf} />}
      />
      <Route
        path="/search"
        element={<Search allBooks={allBooks} updateShelf={updateShelf} />}
      />
    </Routes>
  );
}

export default App;
