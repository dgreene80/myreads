import { Link } from "react-router-dom";
import Shelf from "./Shelf";

const MyShelves = ({ allBooks, updateShelf }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Shelf
            heading={"Currently Reading"}
            filteredBooks={allBooks.filter((b) => b.shelf === "currentlyReading")}
            updateShelf={updateShelf}
          />
          <Shelf
            heading={"Want to Read"}
            filteredBooks={allBooks.filter((b) => b.shelf === "wantToRead")}
            updateShelf={updateShelf}
          />
          <Shelf
            heading={"Read"}
            filteredBooks={allBooks.filter((b) => b.shelf === "read")}
            updateShelf={updateShelf}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to={"search"}></Link>
      </div>
    </div>
  );
};
export default MyShelves;
