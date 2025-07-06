/** @format */

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Ibook } from "@/types/types";
import { Link } from "react-router";

export function BookCard({ book }: { book: Ibook }) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <img
          src={book.image}
          alt=""
        />
        <CardTitle>{book.title}</CardTitle>
        <CardDescription>{book.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <h2>Copies : {book.copies}</h2>
        <h2>Author : {book.author}</h2>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Link
          to={`/book/${book._id}`}
          type="submit"
          className="btn btn-md bg-transparent text-white outline">
          Details
        </Link>
      </CardFooter>
    </Card>
  );
}
