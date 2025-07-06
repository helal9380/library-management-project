/** @format */

import type {
  BorrowFormInputs,
  Ibook,
  IBorrowSummaryResponse,
} from "@/types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
  }),
  tagTypes: ["Book", "Borrow"],
  endpoints: (builder) => ({
    getBooks: builder.query<Ibook[], void>({
      query: () => "/books",
      transformResponse: (response: { data: Ibook[] }) => response.data,
      providesTags: ["Book"],
    }),
    getBookById: builder.query<{ data: Ibook }, string>({
      query: (id) => `/books/${id}`,
    }),
    addBook: builder.mutation<Ibook, Partial<Ibook>>({
      query: (newBook) => ({
        url: "books",
        method: "POST",
        body: newBook,
      }),
      invalidatesTags: ["Book"],
    }),
    deleteBook: builder.mutation<void, string>({
      query: (id) => ({
        url: `books/${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          booksApi.util.updateQueryData("getBooks", undefined, (draft) => {
            return draft.filter((book) => book._id !== id);
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      invalidatesTags: ["Book"],
    }),
    updateBook: builder.mutation<Ibook, Partial<Ibook>>({
      query: ({ _id, ...patch }) => ({
        url: `books/${_id}`,
        method: "PUT",
        body: patch,
      }),
      invalidatesTags: ["Book"],
    }),

    // optimestic ui udpated

    // borrow book api
    borrowBook: builder.mutation<void, BorrowFormInputs>({
      query: (data) => ({
        url: "borrow",
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["Borrow", "Book"],
    }),
    getBorrowSummary: builder.query<IBorrowSummaryResponse, void>({
      query: () => "borrow",
      providesTags: ["Borrow"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookByIdQuery,
  useDeleteBookMutation,
  useUpdateBookMutation,
  useBorrowBookMutation,
  useGetBorrowSummaryQuery,
  useAddBookMutation,
} = booksApi;
