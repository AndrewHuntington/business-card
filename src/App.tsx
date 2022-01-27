import React from 'react';
import Info from './components/Info';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';
import { english } from './languages/english';

// TODO: add a way to change language
export const LanguageContext = React.createContext(english);

function App() {
  return (
    <div className="bg-[#23252C] py-3 h-screen w-screen">
      <div className="w-[317px] h-[780px] border border-red-600 rounded-xl mx-auto bg-[#1A1B21]">
        <LanguageContext.Provider value={english}>
          <main>
            <section>
              <Info />
            </section>
            <section>
              <About />
            </section>
            <section>
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
