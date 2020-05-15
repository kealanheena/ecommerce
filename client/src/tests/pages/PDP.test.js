import React from 'react';
import { render } from '@testing-library/react';
import PDP from '../../pages/PLP';

test('matches snapshot', () => {
  const renderedPDP = render(<PDP />);
  expect(renderedPDP).toMatchSnapshot();
});
