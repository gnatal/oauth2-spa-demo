import styles from '../styles/Login.module.scss'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

function Login() {

  const {t} = useTranslation('common');

  return (
    <div >
        <div className={styles.login_box}>
            <p className={styles.login_box_text}>email</p>
            <input className={styles.login_box_inputs} type="text" placeholder='email' />
            <p className={styles.login_box_text}>{t('password')}</p>
            <input className={styles.login_box_inputs} type="password" placeholder='password'/>
            <div className={styles.login_box_radio}>
              <input type="checkbox" placeholder='password'/> <span>keep me logged</span>
            </div>
            <div className={styles.button}>
              <button>Login</button>
            </div>
        </div>
    </div>
  )
}


export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

export default Login