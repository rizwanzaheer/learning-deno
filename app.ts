import { Application, Context } from "https://deno.land/x/abc@v1.3.1/mod.ts";

const app = new Application();

const port = 3000;

// Static files
app.static("/", "./public");

// Routes
app.get("/", async (ctx: Context) => {
  console.log("get routes is calling!!!");
  await ctx.file("./public/index.html");
});

// server start/listen
app.start({ port });

console.log("Welcome in deno world!");
