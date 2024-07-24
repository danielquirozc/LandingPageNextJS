import Input from '@ui/contact'
import SectionTitle from '@ui/sectionTitle'
import { transporter, mailDataConfig } from '@/config/nodemailer'

export default function Contact () {
  const Send = async formData => {
    'use server'
    const data = {}
    for (const [k, v] of formData.entries()) {
      data[k] = v
    }
    const mailData = {
      ...mailDataConfig,
      to: data.email,
      text: data.message + ' | Sent from: ' + data.email,
      html: `<div>${data.message}</div><p>Enviado por: ${process.env.EMAIL} </p>`
    }
    transporter.sendMail(mailData, function (err, info) {
      if (err) {
        console.log(err)
      } else {
        console.log(info);
      }
    })
  }

  return (
    <section className='text-center min-h-[65dvh] my-20'>
      <SectionTitle title='Contactanos' />

      <p className='text-sm px-3 text-slate-300 mt-2 mb-5 max-w-2xl mx-auto'>
        Nuestra misión es ser la mejor solución para los consumidores, porque
        nos encargamos de brindar soluciones innovadoras para ayudar a las
        empresas a prosperar en el mundo digital.
      </p>

      <form
        encType='multipart/form-data'
        action={Send}
        method='post'
        className='flex flex-col px-5 w-full items-center'
      >
        <Input type='text' required name='name' placeholder='Tu Nombre' />
        <Input
          type='email'
          autocomplete='on'
          required
          name='email'
          placeholder='Tu Email'
        />
        <textarea
          name='message'
          placeholder='Tu Mensaje'
          className='w-full md:w-1/3 border h-28 resize-none border-zinc-700 bg-transparent rounded p-2 mb-4'
        />
        <button
          type='submit'
          className='w-full md:w-1/3 bg-zinc-300 text-black border-zinc-800 border font-medium py-2 px-4 rounded-lg'
        >
          Send Message
        </button>
        <summary className='text-sm text-slate-300 mt-2 mb-5 max-w-2xl mx-auto'>
          La información que enviés se enviara a el email que agregues.
        </summary>
      </form>
    </section>
  )
}
