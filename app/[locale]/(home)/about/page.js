import ServiceItem from '@ui/services'
import SectionTitle from '@ui/sectionTitle'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import ServiceItemClient from '@/components/ui/services/serviceItemClient'

export default async function About () {
  const t = await getTranslations('About')

  const listOfServices = t.raw('services').map(service => (
    <ServiceItemClient key={service.id}>
      <ServiceItem {...service} />
    </ServiceItemClient>
  ))

  return (
    <>
      <section className='mt-20 animate-fade-up text-center'>
        <SectionTitle title={t('sectionTitle')} />
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
            {t.rich('description', {
              strong: children => <strong>{children}</strong>,
              p: children => <p>{children}</p>
            })}
          </div>
        </div>
      </section>
      <section className='flex flex-col my-5 items-center justify-center'>
        <SectionTitle title={t('servicesTitle')} />
        <div className='grid justify-items-center w-full px-4 md:max-w-3xl grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4'>
          {listOfServices}
        </div>
      </section>
    </>
  )
}
