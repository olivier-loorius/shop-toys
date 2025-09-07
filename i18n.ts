import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  return {
    locale: 'fr',
    messages: (await import('./src/messages/fr.json')).default
  };
});
