import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'Boutique',
  description: 'E-commerce'
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const messages = (await import('@/messages/fr.json')).default;
  return (
    <html lang='fr'>
      <body>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
