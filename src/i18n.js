import i18n from 'i18next';
import { initReactI18next} from 'react-i18next';

i18n.use(initReactI18next).init({
  resources:{
    en:{
        translations:{
            'Sign Up':'Sign Up',
            'Password mismatch':'password mismatch',
            Username : 'Username',
            'Display Name':'Display Name',
            'Password Repeat':'Password Repeat',
            'Password':'Password',
            Login: 'Login'
        }
    },
    tr:{
        translations:{
            'Sign Up':'Kayıt Ol',
            'Password mismatch' : 'Aynı Şifreyi Giriniz',
            Username : 'Kullanıcı Adı',
            'Display Name':'Tercih Edilen İsim',
            'Password Repeat':'Şifreyi Tekrarla',
            'Password':'Şifre',
            Login:'Sisteme Giris'
        }
    }
  },
  fallbackLng:'en',
  ns:['translations'],
  defaultNS:'translations',
  keySeparator:false,
  interpolation:{
      escapeValue: false,
      formatSeparator:','
  },
  react:{
      wait:true
  }
  
});
export default i18n;