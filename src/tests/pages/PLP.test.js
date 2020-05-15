import React from 'react';
import { render } from '@testing-library/react';
import PLP from '../../pages/PLP';

test('matches snapshot', () => {
  const renderedPLP = render(<PLP />);
  expect(renderedPLP).toMatchSnapshot();
});
