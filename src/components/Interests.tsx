import React, { useContext } from 'react';
import { LanguageContext } from '../App';

export default function Interests() {
  const language = useContext(LanguageContext);

  return (
    <div className=" mt-[24px]">
      <h2 className=" text-[#F5F5F5] font-bold mb-1">{language.interests}</h2>
      <p className="text-[#DCDCDC] text-[10.25px] leading-4">
        {language.interestsContent}
      </p>
    </div>
  );
}
