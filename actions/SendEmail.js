'use server'
import emailjs from '@emailjs/nodejs';

export const Send = async formData => {
  const data = Object.fromEntries(formData);
  emailjs.send(process.env.SERVICE_ID, process.env.TEMPLATE_ID, data, 
    {
      publicKey: process.env.EMAILJS_PUBLIC_KEY,
      privateKey: process.env.EMAILJS_PRIVATE_KEY
    }
  )
  .then(() => {
    console.log('¡Email enviado!');
  }, (err) => {
    console.log(err);
  });
}