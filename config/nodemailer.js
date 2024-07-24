export const transporter = {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT || 465,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
}

export const mailDataConfig = {
  from: 'TechPro',
  subject: 'Contact Form - TechPro'
}