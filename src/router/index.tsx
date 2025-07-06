/** @format */

import App from "@/App";
import BorrowSummary from "@/components/BorrowSummary";
import BookDetails from "@/pages/books/BookDetails";
import BooksTable from "@/pages/books/BooksTable";
import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        index: true,
        path: "/books",
        element: <BooksTable />,
      },

      {
        path: "/borrow-summary",
        element: <BorrowSummary />,
      },

      {
        path: "/book/:id",
        element: <BookDetails />,
      },
    ],
  },
]);
