import { z } from "zod";

const requiredString = z.string().trim().min(1, "Required");

export const signUpSchema = z.object({
    email: requiredString.email("yacta da5l email 3edl"),
    username: requiredString.regex(
        /^[a-zA-Z0-9_*]+$/,
        "da5l arkam w 7rof - w _ eshta bardo"
    ),
    password: requiredString.min(8, "w tz3l lma tthacker da5l password 3edl yacta ")
});
export type SignUpValues = z.infer<typeof signUpSchema>
export const loginSchema = z.object({
    username: requiredString,
    password: requiredString,
});
export type LoginValues = z.infer<typeof loginSchema>;