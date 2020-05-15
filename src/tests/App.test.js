import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const title = getByText(/Hello Ecom App/i);
  expect(title).toBeInTheDocument();
});

test('matches snapshot', () => {
  expect(<App />).toMatchSnapshot();
});
