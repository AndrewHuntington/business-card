import React, { ReactElement } from 'react';
import { render, screen, RenderOptions } from '@testing-library/react';
import { LanguageContext } from '../../App';
import Info from '../Info';

test('renders profile pic', () => {
  render(<Info />);
  const pic = screen.getByAltText(/head shot/i);
  expect(pic).toBeInTheDocument();
});

// this helps with tests that depend on the language context
// since it will be used with multiple components, maybe it should be moved to a separate file
const customRender = (ui: ReactElement, language: Record<string, string>) => {
  return render(
    <LanguageContext.Provider value={language}>{ui}</LanguageContext.Provider>
  );
};

test('renders content in English', () => {
  const language = {
    name: 'Andrew Huntington',
    job: 'Frontend Developer',
  };

  customRender(<Info />, language);
  // name
  expect(screen.getByText(/Andrew Huntington/)).toBeInTheDocument();
  // job
  expect(screen.getByText(/Frontend Developer/)).toBeInTheDocument();
});

test('renders buttons', () => {
  render(<Info />);
  const emailBtn = screen.getByText(/Email/);
  const linkedinBtn = screen.getByText(/LinkedIn/);
  expect(emailBtn).toBeInTheDocument();
  expect(linkedinBtn).toBeInTheDocument();
});
