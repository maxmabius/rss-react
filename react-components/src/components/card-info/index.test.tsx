import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, it } from 'vitest';
import { testUser } from '../../types';
import CardInfo from '.';

describe('CardInfo', async () => {
  it('renders CardInfo elements for user 1', async () => {
    render(<CardInfo userId={testUser.id} />);
    await waitFor(() => {
      expect(screen.getByText(testUser.company.address.address)).toBeInTheDocument();
      expect(screen.getByText(testUser.company.address.city)).toBeInTheDocument();
      expect(screen.getByText(testUser.company.address.postalCode)).toBeInTheDocument();
      expect(screen.getByText(testUser.company.address.state)).toBeInTheDocument();
    });
  });
});
