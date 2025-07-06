/** @format */

import type { Ibook } from "@/types/types";
import { BookCard } from "./BookCard";

interface Ibookarray {
  books: Ibook[];
}

const BooksList = ({ books }: Ibookarray) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {books.map((book: Ibook) => (
        <BookCard
          key={book._id}
          book={book}
        />
      ))}
    </div>
  );
};

export default BooksList;
