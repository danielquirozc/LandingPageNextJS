import Input from '@ui/contact'
import SectionTitle from '@ui/sectionTitle'
import { Send } from '@/actions/SendEmail';
import Button from '@ui/contact/button';

export default function Contact () {

  return (
    <section className='text-center min-h-[65dvh] my-20'>
      <SectionTitle title='Contactanos' />

      <p className='text-sm px-3 text-slate-300 mt-2 mb-5 max-w-2xl mx-auto'>
        Nuestra misión es ser la mejor solución para los consumidores, porque
        nos encargamos de brindar soluciones innovadoras para ayudar a las
        empresas a prosperar en el mundo digital.
      </p>

      <form
        action={Send}
        method='post'
        className='flex flex-col px-5 w-full items-center'
      >
        <Input type='text' required name='name' placeholder='Tu Nombre' />
        <Input
          type='email'
          autoComplete='email'
          required
          name='email'
          placeholder='Tu Email'
        />
        <textarea
          name='message'
          placeholder='Tu Mensaje'
          className='w-full md:w-1/3 border h-28 resize-none border-zinc-700 bg-transparent rounded p-2 mb-4'
        />
        <Button />
        <summary className='text-sm text-slate-300 mt-2 mb-5 max-w-2xl mx-auto'>
          La información que enviés se enviara a el email que agregues.
        </summary>
      </form>
    </section>
  )
}
