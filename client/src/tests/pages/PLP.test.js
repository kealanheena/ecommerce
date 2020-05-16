import React from 'react';
import { render } from '@testing-library/react';
import PLP from '../../pages/PLP';

test('Should render a <h2> with text of PLP page', () => {
  const { getByTestId } = render(<PLP />);
  expect(getByTestId('PLP-header')).toBeTruthy();
});
