//server/hono.ts
import { OpenAPIHono } from "@hono/zod-openapi";
import {
  createBlogRoute,
  getBlogRoute,
  getBlogsRoute
} from "@/server/routes/blogRoutes";
import { getBlogsHandler } from "./controllers/getBlogs";
import { getBlogHandler } from "./controllers/getBlog";
import { createBlogHandler } from "./controllers/createBlog";

export const app = new OpenAPIHono().basePath("/api");

const blogApp = new OpenAPIHono()
  .openapi(getBlogsRoute, getBlogsHandler)
  .openapi(getBlogRoute, getBlogHandler)
  .openapi(createBlogRoute, createBlogHandler)

app.route("/blogs", blogApp);

export default app;