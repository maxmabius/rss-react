import React from 'react';
import 'jsdom-worker';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { expect, describe, it } from 'vitest';

import { Provider } from 'react-redux';

import { store } from '../../store';

import CreateForm from '.';

describe('CreateForm', () => {
  const mockImage = new File(['test'], 'image.png', { type: 'image/png' });

  render(
    <Provider store={store}>
      <CreateForm />
    </Provider>
  );

  it('renders Create Form', () => {
    expect(screen.getByText(/name/i)).toBeInTheDocument();
    expect(screen.getByText(/birthday/i)).toBeInTheDocument();
    expect(screen.getByText(/department/i)).toBeInTheDocument();
    expect(screen.getByText(/gender/i)).toBeInTheDocument();
    expect(screen.getByText(/image/i)).toBeInTheDocument();
  });

  it('create user', async () => {
    const { container } = render(
      <Provider store={store}>
        <CreateForm />
      </Provider>
    );

    await waitFor(() => {
      fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'John' } });
      fireEvent.change(container.querySelector('[type="date"]')!, {
        target: { value: '1990-02-26' },
      });
      fireEvent.change(container.querySelector('select')!, { target: { value: 'Marketing' } });
      fireEvent.click(container.querySelector('[type="radio"]')!);
      fireEvent.change(container.querySelector('[type="file"]')!, {
        target: { files: [mockImage] },
      });
      fireEvent.click(container.querySelector('[type="checkbox"]')!);
    });

    await waitFor(() => {
      fireEvent.click(screen.getByText(/Create/i));
    });

    const userCard = await screen.findByText(/Marketing/i);
    expect(userCard).toBeInTheDocument();
  });
});
