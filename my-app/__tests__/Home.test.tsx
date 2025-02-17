import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../app/page';

describe('Home', () => {
  it('should have docs link', () => {
    render(<Home />);

    // const link = screen.getByRole('link', { name: /Read our docs/i });
    const text = screen.getByText('Read our Docs');

    expect(text).toBeInTheDocument();
    // expect(link).toHaveAttribute('href', expect.stringContaining('nextjs.org/docs'));
  });


  it('should contain text "information"', () => {
    render(<Home />);

    const text = screen.getByText(/information/i);

    expect(text).toBeInTheDocument();
  });

  it('should have a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
        name: /world/i,
        level: 2,
    })

    expect(heading).toBeInTheDocument();
  })
});
