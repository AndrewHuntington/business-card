import React from 'react';
import fb from '../assets/icons/facebook.png';
import gh from '../assets/icons/github.png';
import ig from '../assets/icons/instagram.png';
import tw from '../assets/icons/twitter.png';

export default function Footer() {
  return (
    <footer className=" mt-6 bg-[#161619] rounded-b-md">
      <div className="py-5 flex justify-center">
        <a
          href="https://twitter.com/andyh_1982"
          target="_blank"
          rel="noopener noreferrer"
          className=" mr-6"
        >
          <img src={tw} alt="twitter" />
        </a>
        {/* <a href="#" className=" mr-6">
          <img src={fb} alt="facebook" />
        </a> */}
        <a
          href="https://www.instagram.com/strugglebunny/"
          target="_blank"
          rel="noopener noreferrer"
          className=" mr-6"
        >
          <img src={ig} alt="instagram" />
        </a>
        <a
          href="https://github.com/AndrewHuntington"
          target="_blank"
          rel="noopener noreferrer"
          className=" mr-6"
        >
          <img src={gh} alt="github" />
        </a>
      </div>
    </footer>
  );
}
