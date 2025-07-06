/** @format */

import { useGetBorrowSummaryQuery } from "@/api/bookapi";

const BorrowSummary = () => {
  const { data, isLoading, isError } = useGetBorrowSummaryQuery();

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (isError)
    return (
      <p className="text-center mt-10 text-red-500">Failed to load summary.</p>
    );

  return (
    <div className="max-w-4xl mx-auto p-6 my-10">
      <h1 className="text-2xl font-semibold mb-6">
        Borrow Summary({data?.data.length})
      </h1>

      <table className="table-auto w-full border border-gray-700 text-left">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="p-2">Title</th>
            <th className="p-2">ISBN</th>
            <th className="p-2">Total Quantity Borrowed</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((item, i) => (
            <tr
              key={i}
              className="border-t border-gray-600">
              <td className="p-2">{item.book.title}</td>
              <td className="p-2">{item.book.isbn}</td>
              <td className="p-2">{item.totalQuantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BorrowSummary;
