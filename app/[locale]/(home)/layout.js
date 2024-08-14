import Footer from "@ui/footer";
import Header from "@ui/header";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export default function Layout({children, params: {locale}}) {

  const messages = getMessages(locale);
  return (
    <NextIntlClientProvider messages={messages}>
      <section>
        <Header />
        {children}
        <Footer />
      </section>
    </NextIntlClientProvider>
  );
}