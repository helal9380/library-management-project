/** @format */
import { useDeleteBookMutation, useGetBooksQuery } from "@/api/bookapi";
import type { Ibook } from "@/types/types";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaBookBible } from "react-icons/fa6";
import { TiDelete } from "react-icons/ti";
import Swal from "sweetalert2";
import EditBookForm from "./EditBookForm";
import Borrow from "./borrow-books/Borrow";

const BooksTable = () => {
  const [editBook, setEditBook] = useState<Ibook | null>(null);
  const [borrowBook, setBorrowBook] = useState<Ibook | null>(null);

  const { data: books, isLoading, isError } = useGetBooksQuery();
  const [deleteBook] = useDeleteBookMutation();

  if (isLoading) return <p>Loading books...</p>;
  if (isError || !books) return <p>Failed to load books.</p>;

  const handleDelete = async (id: string) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        await deleteBook(id).unwrap();
        Swal.fire("Deleted!", "The book has been deleted.", "success");
      } catch (err) {
        Swal.fire("Error!", "Failed to delete the book.", "error");
        console.error(err);
      }
    }
  };

  return (
    <div>
      <dialog
        id="edit_modal"
        className="modal">
        <div className="modal-box bg-black text-white border border-gray-500">
          <div className="space-y-4">
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => {
                (
                  document.getElementById("edit_modal") as HTMLDialogElement
                )?.close();
              }}>
              ✕
            </button>

            {/* Your EditBookForm goes here */}
            <EditBookForm book={editBook} />
          </div>
        </div>
      </dialog>
      <div className="overflow-x-auto p-4">
        <h3 className="text-2xl my-4">Book Management ({books.length})</h3>
        <table className="min-w-full border  shadow-md">
          <thead className="bg-gray-200 text-gray-900">
            <tr>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Author</th>
              <th className="px-4 py-2">Genre</th>
              <th className="px-4 py-2">ISBN</th>
              <th className="px-4 py-2">Copies</th>
              <th className="px-4 py-2">Available</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book: Ibook) => (
              <tr
                key={book._id}
                className="text-center border-t">
                <td className="px-4 py-2">{book.title}</td>
                <td className="px-4 py-2">{book.author}</td>
                <td className="px-4 py-2">{book.genre}</td>
                <td className="px-4 py-2">{book.isbn}</td>
                <td className="px-4 py-2">{book.copies}</td>
                <td className="px-4 py-2">
                  {book.available && book.copies ? "✅ Yes" : "❌ No"}
                </td>
                <td className="px-4 py-2 flex justify-center gap-2">
                  <button
                    onClick={() => {
                      (
                        document.getElementById(
                          "edit_modal"
                        ) as HTMLDialogElement
                      )?.showModal();
                      setEditBook(book);
                    }}
                    className="btn bg-blue-600 text-white">
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(book._id)}
                    className="bg-red-500 cursor-pointer text-white px-2 py-1 rounded">
                    <TiDelete />
                  </button>
                  <button
                    onClick={() => {
                      (
                        document.getElementById(
                          "my_modal_1"
                        ) as HTMLDialogElement
                      )?.showModal();
                      setBorrowBook(book);
                    }}
                    className="bg-green-500 text-white px-2 py-1 rounde">
                    <FaBookBible />
                  </button>{" "}
                  <Borrow id={borrowBook?._id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BooksTable;
