import styles from '../styles/Login.module.scss'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import api from '../src/api'
import { useForm } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
};

function Login() {

  const { t } = useTranslation('login');
  const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();

  const login = async (data:FormData) =>{
    console.log('data', data);
    try {
      await api.post('/login', {...data});
    }
    catch (e) {
      console.log('error', e);
    }
  }  

  const onSubmit = handleSubmit(login);


  return (
    <div >
        <div className={styles.login_box}>
            <form onSubmit={onSubmit}>
              <p className={styles.login_box_text}>{t('email')}</p>
              <input className={styles.login_box_inputs} {...register("email")} type="text" placeholder={t('email')} />
              <p className={styles.login_box_text}>{t('password')}</p>
              <input className={styles.login_box_inputs}  {...register("password")}type="password" placeholder={t('password')}/>
              <div className={styles.login_box_button_box}>
                <button className={styles.login_button} >Login</button>
              </div>
            </form>
        </div>
    </div>
  )
}


export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['login']),
  },
})

export default Login