import React from 'react';
import { render } from '@testing-library/react';
import Checkout from '../../pages/Checkout';

test('matches snapshot', () => {
  const renderedCheckout = render(<Checkout />);
  expect(renderedCheckout).toMatchSnapshot();
});
