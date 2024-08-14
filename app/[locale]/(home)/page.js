import Testimony from '@ui/testimonials'
import SectionTitle from '@ui/sectionTitle'
import Image from 'next/image'
import { Link } from '@/navigation'
import { getTranslations } from 'next-intl/server'
import TestimonyClient from '@ui/testimonials/testimonyClient'

export default async function Home () {
  const t = await getTranslations('Home')
  const testimonios = t.raw('testimonials')

  const listOfTestimonies = testimonios.map((test) => (
    <TestimonyClient key={test.id} >
      <Testimony {...test} />
    </TestimonyClient>
  ))
  
  return (
    <>
      <section
        className='flex animate-fade-up flex-col overflow-hidden lg:flex-row px-3 items-center my-20 min-h-[65dvh] justify-around'
      >
        <div>
          <h1 className='text-3xl font-bold'>
            {t.rich('hero.title', {
              span: (children) => <span className="text-red-500">{children}</span>,
            })}
          </h1>
          <p className='text-lg text-slate-300 mt-2 mb-5 max-w-2xl '>
            {t('hero.description')}
          </p>
          <Link
            href='/contact'
            className='bg-red-500 text-white font-bold py-2 px-4 rounded'
          >
            {t('hero.button')}
          </Link>
        </div>
        <Image
          width={600}
          height={600}
          priority
          src='/hero.svg'
          className='rounded-lg w-auto h-auto'
          alt='Hero'
        />
      </section>
      <section className='text-center'>
        <SectionTitle title={t('sectionTitle')} />
        <div className='flex px-3 lg:[&>:nth-child(2)]:border-red-400/35 lg:[&>:nth-child(2)]:scale-105 flex-row flex-wrap my-20 justify-center gap-7'>
          {listOfTestimonies}
        </div>
      </section>
    </>
  )
}