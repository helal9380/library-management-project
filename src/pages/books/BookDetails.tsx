/** @format */

import { useGetBookByIdQuery } from "@/api/bookapi";
import { useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetBookByIdQuery(id || "");

  const book = data?.data;

  if (isLoading) return <p>Loading book...</p>;
  if (isError || !book) return <p>Book not found</p>;
  return (
    <div className="md:w-[960px] mx-auto">
      <h2 className="text-3xl mt-10">Book Details</h2>
      <div className="md:flex items-center gap-4 border-2 rounded-lg border-gray-800 m-5 p-2">
        <div className="p-2 border md:w-1/2 border-gray-700 rounded-lg">
          <img
            src={book?.image}
            alt=""
          />
        </div>
        <div className="p-4 space-y-2 shadow rounded">
          <h1 className="text-xl font-bold mb-2">Book Name : {book?.title}</h1>
          <p>
            <strong>Author:</strong> {book.author}
          </p>
          <p>
            <strong>Genre:</strong> {book.genre}
          </p>
          <p>
            <strong>ISBN:</strong> {book.isbn}
          </p>
          <p>
            <strong>Copies:</strong> {book.copies}
          </p>
          <p>
            <strong>Available:</strong> {book.available ? "✅ Yes" : "❌ No"}
          </p>
          <p>
            <strong>Description: {book.description}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
