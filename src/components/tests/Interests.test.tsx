import React, { ReactElement } from 'react';
import { render, screen } from '@testing-library/react';
import { LanguageContext } from '../../App';
import Interests from '../Interests';

// this helps with tests that depend on the language context
// since it will be used with multiple components, maybe it should be moved to a separate file
const customRender = (ui: ReactElement, language: Record<string, string>) => {
  return render(
    <LanguageContext.Provider value={language}>{ui}</LanguageContext.Provider>
  );
};

test('renders content in English', () => {
  const language = {
    interests: 'Interests',
    interestsContent:
      'Music. Reading. Video Games. Computer programming. Japanese. Spanish. Translation.',
  };

  customRender(<Interests />, language);
  // title
  expect(screen.getByText(/Interests/)).toBeInTheDocument();
  // content
  expect(screen.getByText(/^Music\. Reading\. /)).toBeInTheDocument();
});
