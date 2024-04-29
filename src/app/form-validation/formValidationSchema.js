
import { z } from 'zod';
export const formValidationSchema = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 characters long' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string().min(10, { message: 'Phone number must be at least 10 characters long' })
  .regex(/^\d{10}$/, { message: 'Phone number must contain only digits' }),
  enquiry: z.string().min(5, { message: 'Query must be at least 5 characters long'}),
});
