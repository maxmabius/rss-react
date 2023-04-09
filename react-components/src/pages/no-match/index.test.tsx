import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { BrowserRouter } from 'react-router-dom';

import NoMatch from './index';

describe('test 404 page', () => {
  test('render', () => {
    const { container } = render(
      <BrowserRouter>
        <NoMatch />
      </BrowserRouter>
    );

    expect(container.firstChild).toBeDefined();
    expect(screen.getByText('404')).not.toBeNull();
  });
});
