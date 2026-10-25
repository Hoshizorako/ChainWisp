// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChainWisp title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChainWisp/i);
    expect(titleElement).toBeInTheDocument();
});
