import { z } from "@hono/zod-openapi"

export const UserSchema = z.object({
  name: z.string().nullable().openapi({
    example: "nababa"
  }),
  image: z.string().nullable().openapi({
    example: "https://avatars.githubusercontent.com/u/xxxxxxxx?v=4"
  }),
})

export const BlogSchema = z.object({
  id: z.number().openapi({
    example: 1
  }),
  title: z.string().openapi({
    example: "ブログタイトル"
  }),
  content: z.string().openapi({
    example: "内容"
  }),
  createdAt: z.string().datetime().openapi({
    example: "2025-02-16T12:00:00Z"
  }),
  userId : z.string().openapi({
    example: "uuid"
  }),
  user: UserSchema
})

export const BlogsSchema = z.array(BlogSchema)

export const BlogIdSchema = z.object({
  id: z.string().openapi({ example: "1" }),
})

export const CreateBlogSchema = z.object({
  title: z.string().min(1, { message: "入力されてないお" }).openapi({
    example: "タイトル"
  }),
  content: z.string().min(1, { message: "入力されてないお" }).openapi({
    example: "内容"
  })
})