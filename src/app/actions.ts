'use server'

import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, insira um email válido." }),
  message: z.string().min(10, { message: "A mensagem deve ter pelo menos 10 caracteres." }),
});

export async function submitContactForm(data: z.infer<typeof contactFormSchema>) {
  const parsed = contactFormSchema.safeParse(data);

  if (!parsed.success) {
    const errorMessages = parsed.error.issues.map(issue => issue.message).join(' ');
    return { success: false, message: `Dados inválidos: ${errorMessages}` };
  }

  // In a real application, you would integrate with an email service like Resend, SendGrid, or Nodemailer.
  // For this example, we'll just log the data to the console.
  console.log('New contact form submission:');
  console.log('Name:', parsed.data.name);
  console.log('Email:', parsed.data.email);
  console.log('Message:', parsed.data.message);

  // Simulate a successful submission
  return { success: true, message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.' };
}
