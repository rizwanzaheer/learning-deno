import { Application } from "https://deno.land/x/abc@v1.3.1/mod.ts";

const app = new Application();

const port = 3000;

app.start({port})

console.log('Welcome in deno world!');