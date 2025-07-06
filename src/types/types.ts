/** @format */

export type Ibook = {
  _id: string;
  title: string;
  author: string;
  genre: "SCIENCE" | "FICTION" | "HISTORY" | "BIOGRAPHY";
  isbn: string;
  description: string;
  copies: number;
  image?: string;
  available: boolean;
  createdAt: string;
  updatedAt: string;
};
export interface Iborrow {
  _id: string;
  book: string;
  quantity: number;
  dueDate: string;
  createdAt: string;
  updatedAt: string;
}

export interface BorrowFormInputs {
  book: string;
  quantity: number;
  dueDate: string;
}
interface IBorrowedBookSummary {
  totalQuantity: number;
  book: {
    title: string;
    isbn: string;
  };
}

export interface IBorrowSummaryResponse {
  success: boolean;
  message: string;
  data: IBorrowedBookSummary[];
}
