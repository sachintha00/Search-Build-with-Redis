import { Hono } from "hono";
import { handle } from "hono/vercel";
import { cors } from 'hono/cors'

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.use('/*', cors())
app.get("/search", async (c) => {
  console.log("hello")
  console.log("hello");
});

export const GET = handle(app);
export default app as never
