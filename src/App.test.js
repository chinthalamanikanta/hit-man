import { render, screen } from '@testing-library/react';
import App from './App';

test('renders login heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/login/i);
  expect(headingElement).toBeInTheDocument();
});
