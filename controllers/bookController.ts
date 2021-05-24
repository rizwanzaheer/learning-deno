import { Context } from "https://deno.land/x/abc@v1.3.1/mod.ts";

import { Book } from "../models/bookModel.ts";

const books: Book[] = [
  {
    id: "1",
    title: "name of the wind",
    author: "patrick rothfuss tt",
    pages: 500,
  },
  { id: "2", title: "the way of kings", author: "brandon chawal", pages: 3000 },
  { id: "3", title: "good omens", author: "terry terr", pages: 100 },
];

export const getAllBooks = (ctx: Context) => {
  return ctx.json(books, 200);
};
export const getBook = (ctx: Context) => {
  const { id } = ctx.params;

  const book = books.find((b: Book) => b.id === id);

  if (book) return ctx.json(book, 200);
  return ctx.string("No book found with the given id!", 404);
};
export const createBook = (ctx: Context) => {};
export const deleteBook = (ctx: Context) => {};
