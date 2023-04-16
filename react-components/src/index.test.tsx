import React from 'react';
import { screen, render } from '@testing-library/react';

import { App } from '.';

describe('App', () => {
  it('check About route', async () => {
    render(<App />);
    expect(screen.queryByText(/About/)).toBeInTheDocument();
  });
});
