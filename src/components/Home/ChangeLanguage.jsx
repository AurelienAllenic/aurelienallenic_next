/* eslint-disable */
import React from 'react';
import { useLanguage } from '@/app/context/LanguageContext';

const ChangeLanguage = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className='container_change_languages'>
      <button className='button_change_languages' onClick={toggleLanguage}>
        {language}
      </button>
    </div>
  );
};

export default ChangeLanguage;
