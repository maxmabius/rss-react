import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { testUser } from '../../types';
import Card from '.';

describe('CardInfo', async () => {
  it('renders Card elements for user 1', async () => {
    beforeEach(() => {
      render(<Card user={testUser} />);
    });

    it('renders card with firstName', () => {
      expect(screen.getByText(testUser.firstName)).toBeInTheDocument();
    });

    it('renders card with birthDate', () => {
      expect(screen.getByText(testUser.birthDate)).toBeInTheDocument();
    });

    it('renders card with department', () => {
      expect(screen.getByText(testUser.company.department)).toBeInTheDocument();
    });

    it('renders card with gender', () => {
      expect(screen.getByText(testUser.gender)).toBeInTheDocument();
    });
  });
});
