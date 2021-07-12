import { render, screen } from '@testing-library/react';
import App from '../App'

describe('App', () => {
  it('renders a PersonList', () => {
    const app = render(<App />);
    // `getByText` select text from the imported component
    const childElement = app.getByText("Bob Smith");

    expect(childElement).toBeInTheDocument();
  })
})