import Testimony from '@ui/testimonials'
import SectionTitle from '@ui/sectionTitle'
import Image from 'next/image'
import Link from 'next/link'
import { testimonios } from '@ui/testimonials/testimonialsData'

export default function Home () {
  const listOfTestimonies = testimonios.map((testimony) => (
    <Testimony key={testimony.id} {...testimony} />
  ))
  return (
    <>
      <section
        className='flex flex-col overflow-hidden lg:flex-row px-3 items-center my-20 min-h-[65dvh] justify-around'
      >
        <div>
          <h1 className='text-3xl font-bold'>
            Impulsamos tu negocio hacia el{' '}
            <span className='text-red-400'>futuro digital</span>
          </h1>
          <p className='text-lg text-slate-300 mt-2 mb-5 max-w-2xl '>
            TechPro es una empresa de consultoría tecnológica que ofrece
            soluciones innovadoras para ayudar a las empresas a prosperar en el
            mundo digital.
          </p>
          <Link
            href='/contact'
            className='bg-red-500 text-white font-bold py-2 px-4 rounded'
          >
            ¡Contactanos!
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
        <SectionTitle title='¿Qué opinan nuestros clientes?' />
        <div className='flex px-3 flex-row flex-wrap my-20 justify-center gap-5'>
          {listOfTestimonies}
        </div>
      </section>
    </>
  )
}