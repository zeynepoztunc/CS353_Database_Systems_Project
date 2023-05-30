import { render, screen } from '@testing-library/react';
import rentalPage from './RentalPage';

test('renders learn react link', () => {
  render(<rentalPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
