import { z } from 'zod';

export const contactSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters' }),
  businessName: z.string().min(2, { message: 'Business name is required' }),
  businessType: z.enum(['restaurant', 'clothing', 'other'], {
    message: 'Please select a business type',
  }),
  phone: z
    .string()
    .min(11, { message: 'Please enter a valid phone number (at least 11 digits)' })
    .max(15, { message: 'Phone number cannot exceed 15 digits' }),
  email: z.string().email({ message: 'Invalid email address' }).optional().or(z.literal('')),
  budget: z.enum(['under-5k', '5k-15k', '15k-plus'], {
    message: 'Please select your monthly budget range',
  }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters long' }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
