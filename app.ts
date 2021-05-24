import { Application, Context } from "https://deno.land/x/abc@v1.3.1/mod.ts";
import {
  getAllBooks,
  createBook,
  getBook,
  deleteBook,
} from "./controllers/bookController.ts";

const app = new Application();

const port = 3000;

// Static files
app.static("/", "./public");

// Routes
app.get("/", async (ctx: Context) => {
  console.log("get routes is calling!!!");
  await ctx.file("./public/index.html");
});

app
  .get("/books", getAllBooks)
  .get("/books/:id", getBook)
  .post("/books", createBook)
  .delete("/books/:id", deleteBook);

// server start/listen
app.start({ port });

console.log("Welcome in deno world!");
