import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Card from './card';

describe('testing cards', () => {
  test('test card 1', () => {
    const testData = {
      id: 1,
      image: 'https://robohash.org/hicveldicta.png',
      firstName: 'Terry',
      lastName: 'Medhurst',
      birthDate: '2000-12-25',
      department: 'Marketing',
    };

    const { container } = render(<Card key={testData.id} user={testData} />);

    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(testData.lastName)).not.toBeNull();
    expect(screen.getByText(testData.birthDate)).not.toBeNull();
    expect(screen.getByText(testData.department)).not.toBeNull();
  });

  test('test card 2', () => {
    const testData = {
      id: 2,
      image: 'https://robohash.org/doloremquesintcorrupti.png',
      firstName: 'Sheldon',
      lastName: 'Quigley',
      birthDate: '2003-08-02',
      department: 'Services',
    };

    const { container } = render(<Card key={testData.id} user={testData} />);

    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(testData.lastName)).not.toBeNull();
    expect(screen.getByText(testData.birthDate)).not.toBeNull();
    expect(screen.getByText(testData.department)).not.toBeNull();
  });

  test('test card 3', () => {
    const testData = {
      id: 3,
      image: 'https://robohash.org/consequunturautconsequatur.png',
      firstName: 'Terrill',
      lastName: 'Hills',
      birthDate: '1992-12-30',
      department: 'Marketing',
    };

    const { container } = render(<Card key={testData.id} user={testData} />);

    expect(container.firstChild).toBeDefined();
    expect(screen.getByText(testData.lastName)).not.toBeNull();
    expect(screen.getByText(testData.birthDate)).not.toBeNull();
    expect(screen.getByText(testData.department)).not.toBeNull();
  });
});
