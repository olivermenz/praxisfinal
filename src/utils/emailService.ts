import emailjs from '@emailjs/browser';

const EMAIL_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAIL_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAIL_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

interface EmailData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    if (!EMAIL_SERVICE_ID || !EMAIL_TEMPLATE_ID || !EMAIL_PUBLIC_KEY) {
      console.error('Missing EmailJS configuration');
      return false;
    }

    emailjs.init(EMAIL_PUBLIC_KEY);

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      message: data.message,
      to_email: 'info@kinderarztpraxis-menz.de'
    };

    const response = await emailjs.send(
      EMAIL_SERVICE_ID,
      EMAIL_TEMPLATE_ID,
      templateParams
    );

    return response.status === 200;
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
};