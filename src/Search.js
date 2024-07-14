import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { search } from "./BooksAPI";
import Book from "./Book";

const Search = ({ allBooks, updateShelf }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [foundBooks, setFoundBooks] = useState([]);

  useEffect(() => {
    const runSearch = async () => {
      const searchResults = await search(searchTerm, 10);
      if (!searchResults || !Array.isArray(searchResults)) {
        setFoundBooks([]);
        return;
      }
      const currentFoundBooks = searchResults.map(foundBook => {
        const existingBook = allBooks.find(book => book.id === foundBook.id);
        return existingBook || foundBook;
      });
      setFoundBooks(currentFoundBooks);
    };
    runSearch();
  }, [searchTerm, allBooks]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to={"/"}>
          close
        </Link>

        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {foundBooks.map((book) => (
            <li key={book.id}>
              <Book book={book} updateShelf={updateShelf} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Search;
