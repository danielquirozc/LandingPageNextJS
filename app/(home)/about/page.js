import ServiceItem from '@ui/services'
import { servicesData } from '@ui/services/servicesData'
import SectionTitle from '@ui/sectionTitle'
import Image from 'next/image'

export default function About () {

  const listOfServices = servicesData.map((service) => (
    <ServiceItem
      key={service.id}
      {...service}
    />
  ))

  return (
    <>
      <section className='mt-20 text-center'>
        <SectionTitle title='¿Quienes Somos?' />
        <div className='flex flex-col px-3 lg:flex-row items-center my-20 justify-center gap-5'>
          <Image
            src='/about.jpg'
            priority
            className='rounded-lg w-auto h-auto'
            alt='Hero'
            width={600}
            height={350}
          />
          <div className='text-start text-lg text-slate-300 mt-2 max-w-xl *:mb-4'>
            <p>
              <strong>TechPro</strong> es una empresa de consultoría tecnológica
              que ofrece soluciones innovadoras para ayudar a las empresas a
              prosperar en el mundo digital.
            </p>
            <p>
              Nuestra misión es ser la mejor solución para los consumidores,
              brindar el mejor servicio y la mejor experiencia de uso de
              tecnologías.
            </p>
          </div>
        </div>
      </section>
      <section className='flex flex-col my-5 items-center justify-center'>
        <SectionTitle title='Nuestros Servicios' />
        <div className='grid justify-items-center w-full px-4 md:max-w-3xl grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4'>
          {listOfServices}
        </div>
      </section>
    </>
  )
}
