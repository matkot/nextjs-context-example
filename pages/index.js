import { useLanguageContext } from '../components/Context'
import styles from '../styles/Home.module.css'

export default function Home() {
  // useLanguageContext zwraca obiekt, to co widzisz ponizej to destrukcja obiektu (object destructing).
  // rownie dobrze mozna by zrobic tak: 
  // const context = useLanguegeContext();
  // <select onChange={(event) => context.setLanguage(event?.target?.value)}>
  // ...
  // Current language: {context.language}
  const { language, setLanguage } = useLanguageContext();

  // event?.target?.value moze wydawac Ci sie nieznajome, podpowiedz: optional chaining
  return (
    <div className={styles.container}>
      <div>
      <select onChange={(event) => setLanguage(event?.target?.value)}>
        <option value="en">English</option>
        <option value="nl">Dutch</option>
        <option value="pl">Polish</option>
      </select>
      </div>

      <div>
        Current language: {language}
      </div>
    </div>
  )
}
