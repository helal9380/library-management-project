/** @format */

import { useGetBooksQuery } from "@/api/bookapi";
import BookSlider from "@/components/Bannar";
import BooksList from "../books/BooksList";

const Home = () => {
  const { data: books, isLoading, isError } = useGetBooksQuery();

  if (isLoading) return <p>Loading books...</p>;
  if (isError || !books) return <p>Failed to load books.</p>;
  return (
    <div>
      <BookSlider books={books} />
      <div>
        <h2 className="text-2xl font-semibold my-5 text-center">Books List</h2>
        <BooksList books={books} />
      </div>
    </div>
  );
};

export default Home;
