import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import About from './index';

describe('test about page', () => {
  test('render', () => {
    const { container } = render(<About />);

    expect(container.firstChild).toBeDefined();
    expect(screen.getByText('About')).not.toBeNull();
  });
});
