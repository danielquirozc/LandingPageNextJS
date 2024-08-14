import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

// Can be imported from a shared config
const locales = ['en', 'es']

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound()

  return {
    messages: {
      Home: { ...(await import(`./messages/${locale}/Home.json`)).default },
      About: { ...(await import(`./messages/${locale}/About.json`)).default },
      Contact: {
        ...(await import(`./messages/${locale}/Contact.json`)).default
      }
    }
  }
})
