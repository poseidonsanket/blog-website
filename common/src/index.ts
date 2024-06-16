import z from "zod"

export const signupInput = z.object({
    email: z.string().email(),
    password: z.string().min(5),
    name: z.string().optional(),
});

export const signinInput = z.object({
    email: z.string().email(),
    password: z.string().min(5),
});

export const createPostInput = z.object({
    title: z.string(),
    content: z.string(),
});

export const updatePostInput = z.object({
    id: z.string(),
    title: z.string().optional(),
    content: z.string().optional(),
});


export type SigninType = z.infer<typeof signinInput>;
export type SignupType = z.infer<typeof signupInput>;
export type CreatePostType = z.infer<typeof createPostInput>;
export type UpdatePostType = z.infer<typeof updatePostInput>;