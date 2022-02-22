import { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import './styles.css';
import { wrapper } from '../redux/store';

function CustomApp({ Component, pageProps, ...props }: AppProps & any) {
  return (
    <>
      <Head>
        <title>Welcome to todoit!</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(CustomApp);
