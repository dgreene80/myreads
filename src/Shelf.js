import Book from "./Book";

const Shelf = ({ heading, filteredBooks, updateShelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{heading}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {filteredBooks.map((b) => (
            <li key={b.id}>
              <Book book={b} updateShelf={updateShelf} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
export default Shelf;
