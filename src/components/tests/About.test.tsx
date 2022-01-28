import React, { ReactElement } from 'react';
import { render, screen } from '@testing-library/react';
import { LanguageContext } from '../../App';
import About from '../About';

// this helps with tests that depend on the language context
// since it will be used with multiple components, maybe it should be moved to a separate file
const customRender = (ui: ReactElement, language: Record<string, string>) => {
  return render(
    <LanguageContext.Provider value={language}>{ui}</LanguageContext.Provider>
  );
};

test('renders content in English', () => {
  const language = {
    about: 'About',
    aboutContent:
      'I am a frontend developer with a passion for taking ideas from concept to reality. My favorite tools are React, TypeScript, Tailwind CSS, Git, and Visual Studio Code. My aim is to learn something new with each project I take on. I am currently living and working in the lovely port city of Yokohama, Japan.',
  };

  customRender(<About />, language);
  // title
  expect(screen.getByText(/About/)).toBeInTheDocument();
  // content
  expect(screen.getByText(/^I am a frontend/)).toBeInTheDocument();
});
