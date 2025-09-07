'use client';
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('home');
  return (
    <main className='p-8'>
      <h1 className='text-2xl font-bold'>{t('title')}</h1>
      <p className='mt-2'>{t('subtitle')}</p>
      <p className='mt-2'>API test: /api/health</p>
    </main>
  );
}
