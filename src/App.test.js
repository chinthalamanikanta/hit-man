import { render, screen } from '@testing-library/react';
import App from './App';

test('renders login heading', () => {
  render(<App />);
  const elements = screen.getAllByText(/login/i);
  expect(elements[0]).toBeInTheDocument();
});
