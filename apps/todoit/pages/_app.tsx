import './styles.css';

import { AppProps } from 'next/app';
import Head from 'next/head';

import { Toolbar } from '../components';
import { wrapper } from '../redux/store';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to todoit!</title>
      </Head>
      <Toolbar />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(CustomApp);
