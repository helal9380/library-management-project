/** @format */

// import { useBorrowBookMutation } from "@/api/borrowapi";
import { useBorrowBookMutation } from "@/api/bookapi";
import type { BorrowFormInputs } from "@/types/types";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Borrow = ({ id }: { id: string | undefined }) => {
  const navigate = useNavigate();
  const [borrowBook] = useBorrowBookMutation();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BorrowFormInputs>();

  useEffect(() => {
    if (id) {
      reset();
    }
  }, [id, reset]);
  const onSubmit = async (data: BorrowFormInputs) => {
    setIsLoading(true);
    const payload = {
      book: data.book, // book as bookId
      quantity: Number(data.quantity),
      dueDate: data.dueDate,
    };
    try {
      await borrowBook(payload).unwrap();
      setIsLoading(false);
      Swal.fire({
        icon: "success",
        title: "Book Borrowed!",
        text: "Your request has been submitted.",
        confirmButtonColor: "#0a7350",
      });
      const modal = document.getElementById("my_modal_1") as HTMLDialogElement;
      modal?.close?.();
      reset();
      navigate("/borrow-summary");
    } catch (error: unknown) {
      console.log(error);
      setIsLoading(false);
      toast.error(`The ${data.quantity} copies not available.`);
    }
  };
  return (
    <dialog
      id="my_modal_1"
      className="modal">
      <div className="modal-box bg-black">
        <h3 className="font-bold text-lg text-start">Borrow Book!</h3>

        <form
          method="dialog"
          onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block mb-1 font-medium text-start">Book ID</label>
            <input
              defaultValue={id}
              readOnly
              {...register("book", { required: true })}
              className="input input-bordered w-full bg-gray-900 "
              placeholder="Enter your user ID"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-start w-full">
              Quantity
            </label>
            <input
              className="input input-bordered w-full bg-gray-900 "
              type="number"
              {...register("quantity", {
                required: "Quantity is required",
                min: {
                  value: 1,
                  message: "Minimum 1 quantity is required",
                },
              })}
            />

            {errors.quantity && (
              <p className="text-red-500 text-start text-sm">
                {errors.quantity.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium text-start">
              Due Date
            </label>
            <input
              type="date"
              {...register("dueDate", { required: "Due Date is requered" })}
              className="input input-bordered w-full bg-gray-900 text-white"
            />
            {errors.dueDate && (
              <p className="text-red-500 text-start text-sm">
                {errors.dueDate.message}
              </p>
            )}
          </div>

          <div className="flex justify-end mt-10">
            <button
              type="submit"
              className="btn bg-gray-900 text-white">
              {isLoading ? "Borrowing..." : "Borrow"}
            </button>
          </div>
          <button
            type="button"
            onClick={() =>
              (
                document.getElementById("my_modal_1") as HTMLDialogElement
              )?.close()
            }
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default Borrow;
