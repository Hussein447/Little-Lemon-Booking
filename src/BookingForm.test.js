import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('renders booking form heading', () => {
  render(<BookingForm />);
  const heading = screen.getByText(/Book a Table/i);
  expect(heading).toBeInTheDocument();
});
