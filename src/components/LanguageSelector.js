import React from 'react';
import { withTranslation } from 'react-i18next';
import { changeLanguage } from '../api/apiCalls';

const LanguageSelector=(props) =>{
    const onChangeLanguage=language => {
        const{i18n}=props;
        i18n.changeLanguage(language);
        changeLanguage(language);
    };

    return(
        <div className="container">
        <img src="https://www.countryflags.io/tr/flag/24.png"  onClick={() => onChangeLanguage('tr')} style={{cursor:'pointer'}}></img>
        <img src="https://www.countryflags.io/us/flag/24.png"  onClick={() => onChangeLanguage('en')} style={{cursor:'pointer'}}></img>
        </div>   
    );
};
export default withTranslation()(LanguageSelector);