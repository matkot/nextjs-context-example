import { LanguageContextWrapper } from '../components/Context'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <LanguageContextWrapper>
      <Component {...pageProps} />
    </LanguageContextWrapper>
  );
}

export default MyApp
