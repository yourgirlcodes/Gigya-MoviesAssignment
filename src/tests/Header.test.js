import React from 'react';
import { render } from '@testing-library/react';
import {Header} from '../components/Header';

test('renders Header component text', () => {
  const { getByText } = render(<Header />);
  const linkElement = getByText(/Top 60 Trending Movies for Last Week/i);
  expect(linkElement).toBeInTheDocument();
});
