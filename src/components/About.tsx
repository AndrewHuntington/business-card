import React, { useContext } from 'react';
import { LanguageContext } from '../App';

export default function About() {
  const language = useContext(LanguageContext);

  return (
    <div className=" mt-[34px]">
      <h2 className=" text-[#F5F5F5] font-bold mb-1">{language.about}</h2>
      <p className="text-[#DCDCDC] text-[10.25px] leading-4">
        {language.aboutContent}
      </p>
    </div>
  );
}
