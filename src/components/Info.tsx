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
        <h4 className="website text-[10px] mb-4">andrewhuntington.com</h4>
      </a>
      <div>
        <button className="shadow-sm w-[116px] bg-white py-1.5 font-medium text-sm text-[#374151] rounded-md">
          {/* TODO: Have subject change according to language */}
          <a
            href="mailto:andrew.huntington+homepage@gmail.com?subject=I'd like to talk to you about an opportunity"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-envelope mr-2 w-4 h-4"></i>
            Email
          </a>
        </button>
        <button className="shadow-sm w-[116px] ml-4 bg-[#5093E2] py-1.5 font-medium text-sm text-white rounded-md">
          <a
            href="https://www.linkedin.com/in/andrew-huntington-yokjpn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin mr-2 w-4 h-4"></i>
            LinkedIn
          </a>
        </button>
      </div>
    </div>
  );
}
