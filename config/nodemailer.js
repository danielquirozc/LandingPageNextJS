import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST || 'smtp.gmail.com',
  port: process.env.MAIL_PORT || 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
})

export const mailDataConfig = {
  from: 'TechPro',
  subject: 'Contact Form - TechPro'
}