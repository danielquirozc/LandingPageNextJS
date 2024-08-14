import Input from '@ui/contact'
import SectionTitle from '@ui/sectionTitle'
import { Send } from '@/actions/SendEmail'
import Button from '@ui/contact/button'
import { getTranslations } from 'next-intl/server'

export default async function Contact () {
  const t = await getTranslations('Contact')

  return (
    <section className='text-center animate-fade-up min-h-[65dvh] my-20'>
      <SectionTitle title={t('sectionTitle')} />

      <p className='text-sm px-3 text-slate-300 mt-2 mb-5 max-w-2xl mx-auto'>
        {t('description')}
      </p>

      <form
        action={Send}
        method='post'
        className='flex flex-col px-5 w-full items-center'
      >
        <Input type='text' required name='name' placeholder={t('form.name')} />
        <Input
          type='email'
          autoComplete='email'
          required
          name='email'
          placeholder={t('form.email')}
        />
        <textarea
          name='message'
          placeholder={t('form.message')}
          className='w-full md:w-1/3 border h-28 resize-none border-zinc-700 bg-transparent rounded p-2 mb-4'
        />
        <Button pendingText={t('form.sending')} buttonText={t('form.button')} />
        <summary className='text-sm text-slate-300 mt-2 mb-5 max-w-2xl mx-auto'>
          {t('form.summary')}
        </summary>
      </form>
    </section>
  )
}
