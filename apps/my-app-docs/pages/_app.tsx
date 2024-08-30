// pages/_app.tsx
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  console.log('masuk pagiation');
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
