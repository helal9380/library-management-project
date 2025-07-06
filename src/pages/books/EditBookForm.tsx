/** @format */

import { useUpdateBookMutation } from "@/api/bookapi";
import type { Ibook } from "@/types/types";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaBook } from "react-icons/fa";
import { toast } from "react-toastify";

interface Props {
  book: Ibook | null;
}
const EditBookForm = ({ book }: Props) => {
  const [updateBook, { isLoading }] = useUpdateBookMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Ibook>();
  useEffect(() => {
    if (book) {
      reset(book);
    }
  }, [book, reset]);
  const handleFormSubmit = async (data: Ibook) => {
    console.log(data);
    try {
      const result = await updateBook({ ...data, _id: data._id }).unwrap();
      console.log("Book updated:", result);
      // document.getElementById("edit_modal")?.close();
      const dialog = document.getElementById(
        "edit_modal"
      ) as HTMLDialogElement | null;
      dialog?.close();
      toast("The book update successfully.");
      reset();
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <h3 className="text-xl font-semibold">Edit Book</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block mb-1 font-medium">Title</label>
            <input
              type="text"
              {...register("title", { required: "Title is required" })}
              className="input input-bordered w-full bg-gray-800"
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">Author</label>
            <input
              type="text"
              {...register("author", { required: "Author is required" })}
              className="input input-bordered w-full bg-gray-800"
            />
            {errors.author && (
              <p className="text-red-500 text-sm">{errors.author.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">Genre</label>
            <input
              type="text"
              {...register("genre")}
              className="input input-bordered w-full bg-gray-800"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">ISBN</label>
            <input
              type="text"
              {...register("isbn")}
              className="input input-bordered w-full bg-gray-800"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Copies</label>
            <input
              type="number"
              {...register("copies", { valueAsNumber: true })}
              className="input input-bordered w-full bg-gray-800"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Available</label>
            <select
              {...register("available")}
              className="select select-bordered w-full bg-gray-800">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block mb-1 font-medium">Image URL</label>
          <input
            type="text"
            {...register("image")}
            className="input input-bordered w-full bg-gray-800"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            {...register("description")}
            className="textarea textarea-bordered w-full bg-gray-800"
          />
        </div>

        <div className="flex justify-end gap-2">
          <button
            // onClick={() => document.getElementById("edit_modal")?.close()}

            className="btn bg-gray-600 text-white">
            <FaBook />
            {isLoading ? "Updating..." : "Update Book"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBookForm;
