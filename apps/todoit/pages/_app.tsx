import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { wrapper } from '../redux/store';
import { Toolbar } from '../components';

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
