const { z } = require("zod");

//object schema for registeration
const registerSchema = z.object({
  firstName: z
    .string({ required_error: "First name is required" })
    .trim()
    .min(3, { message: "First name must be at least 1 characters" })
    .max(255, { message: "First name can't be greater than 255 characters" }),
  lastName: z
    .string({ required_error: "Last name is required" })
    .trim()
    .min(3, { message: "Last name must be at least 1 characters" })
    .max(255, { message: "Last name can't be greater than 255 characters" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .min(3, { message: "Email must be at least 3 characters" })
    .max(255, { message: "Email can't be greater than 255 characters" }),
  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must be at least 10 characters" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters" })
    .max(255, { message: "Password can't be greater than 1024 characters" }),
  confirmPassword: z
    .string({ required_error: "Confirm your password" })
    .min(6, { message: "Password must be at least 6 characters" })
    .max(255, { message: "Password can't be greater than 1024 characters" }),
});

module.exports = registerSchema;
