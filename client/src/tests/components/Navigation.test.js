import React from 'react';
import { render } from '@testing-library/react';
import Navigation from '../../components/Navigation';

// Need to handle react router mocking before this will work
test.skip('matches snapshot', () => {
  const renderedNavigation = render(<Navigation />);
  expect(renderedNavigation).toMatchSnapshot();
});
