// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CoinCore title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CoinCore/i);
    expect(titleElement).toBeInTheDocument();
});
