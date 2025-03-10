import { createRoute, z } from "@hono/zod-openapi";
import { BlogIdSchema, BlogSchema, BlogsSchema, CreateBlogSchema } from "../models/blogSchemas";

export const getBlogsRoute = createRoute({
  path: "/",
  method: "get",
  description: "ブログの全データを取得",
  responses: {
    200: {
      description: "取得成功",
      content: {
        "application/json": {
          schema: BlogsSchema
        }
      }
    }
  }
})

export const getBlogRoute = createRoute({
  path: "/{id}",
  method: "get",
  description: "個別記事の取得",
  request: {
    params: BlogIdSchema
  },
  responses: {
    200: {
      description: "取得成功",
      content: {
        "application/json": {
          schema: BlogSchema
        }
      }
    },
    404: {
      description: "記事みつかんなかった",
      content: {
        "application/json": {
          schema: z.null()
        }
      }
    }
  }
})

export const createBlogRoute = createRoute({
  path: "/",
  method:"post",
  description: "投稿",
  request: {
    body: {
      content: {
        "application/json": {
          schema: CreateBlogSchema
        }
      }
    }
  },
  responses: {
    201: {
      description: "成功",
      content: {
        "application/json": {
          schema: BlogSchema
        }
      }
    }
  }
})