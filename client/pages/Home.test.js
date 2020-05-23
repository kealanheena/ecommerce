import React from 'react';
import { render } from '@testing-library/react';
import Home from '../src/pages/Home';

test('matches snapshot', () => {
  const renderedHome = render(<Home />);
  expect(renderedHome).toMatchSnapshot();
});
