import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { CardProvider } from '@/context/CardContext';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <CardProvider>
      <Component {...pageProps} />
    </CardProvider>
  );
}
