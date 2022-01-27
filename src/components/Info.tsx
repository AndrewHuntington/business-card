import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import profilePic from '../assets/images/profile.png';

export default function Info() {
  const language = useContext(LanguageContext);

  return (
    <div className="text-center">
      <img src={profilePic} className="rounded-t-xl w-full" alt="head shot" />
      <h1 className="name text-2xl font-bold text-white mt-5 mb-1">
        {language.name}
      </h1>
      <h3 className="position text-[13px] text-[#F3BF99] mb-2">
        {language.job}
      </h3>
      <a
        href="https://andrewhuntington.com"
        className="hover:underline text-[#F5F5F5]"
      >
        <h4 className="website text-[10px]">andrewhuntington.com</h4>
      </a>
      {/* TODO: add email and linkedin button */}
    </div>
  );
}
