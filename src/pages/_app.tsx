import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import theme from '@/flowbite-theme';
import { Flowbite } from 'flowbite-react';
import { ToastProvider } from '@/contexts/Toast-Context';
import { SessionProvider } from 'next-auth/react';

function App({ Component, pageProps }: AppProps) {
  return (
    <Flowbite theme={{ theme }}>
      <ToastProvider>
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
        </SessionProvider>
      </ToastProvider>
    </Flowbite>
  );
}

export default App;
