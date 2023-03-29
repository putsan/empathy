import { Analytics } from '@vercel/analytics/react';
import '../styles/globals.scss';
import '../fonts/mont/stylesheet.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
