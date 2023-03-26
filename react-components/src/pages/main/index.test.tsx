import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Card from '../../components/card';
import { fakeUsers } from '../../pages/main/fake-users';

describe('testing cards', () => {
  test('test card 1', () => {
    const testData = fakeUsers[0];

    const { container } = render(<Card key={testData.id} user={testData} />);

    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(testData.firstName)).not.toBeNull();
    expect(screen.getByText(testData.birthDate)).not.toBeNull();
    expect(screen.getByText(testData.department)).not.toBeNull();
  });

  test('test card 2', () => {
    const testData = fakeUsers[1];

    const { container } = render(<Card key={testData.id} user={testData} />);

    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(testData.firstName)).not.toBeNull();
    expect(screen.getByText(testData.birthDate)).not.toBeNull();
    expect(screen.getByText(testData.department)).not.toBeNull();
  });

  test('test card 3', () => {
    const testData = fakeUsers[2];

    const { container } = render(<Card key={testData.id} user={testData} />);

    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(testData.firstName)).not.toBeNull();
    expect(screen.getByText(testData.birthDate)).not.toBeNull();
    expect(screen.getByText(testData.department)).not.toBeNull();
  });
});
