import React, { useState } from 'react';
import Info from './components/Info';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';
import { english } from './languages/english';
import { japanese } from './languages/japanese';

export const LanguageContext = React.createContext(english);

function App() {
  const [language, setLanguage] = useState(english);

  return (
    <div className="py-3 h-screen w-screen">
      <header>
        <nav className="text-white text-xs flex mb-1 justify-center">
          <button
            className="hover:underline focus:underline"
            onClick={() => setLanguage(english)}
          >
            English 🇺🇸
          </button>
          <p className="mx-1">/</p>
          <button
            className="hover:underline focus:underline"
            onClick={() => setLanguage(japanese)}
          >
            日本語 🇯🇵
          </button>
        </nav>
      </header>
      <div className="w-[317px] h-[780px] rounded-xl mx-auto bg-[#1A1B21]">
        <LanguageContext.Provider value={language}>
          <main>
            <section>
              <Info />
            </section>
            <section className="pl-9 pr-[34px]">
              <About />
            </section>
            <section className="pl-9 pr-[34px]">
              <Interests />
            </section>
          </main>
        </LanguageContext.Provider>
        <Footer />
      </div>
    </div>
  );
}

export default App;
