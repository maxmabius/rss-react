import React from 'react';
import 'jsdom-worker';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import CreateForm from '.';

describe('CreateForm', () => {
  const mockImage = new File(['test'], 'image.png', { type: 'image/png' });

  it('renders Create Form', () => {
    render(<CreateForm />);

    expect(screen.getByText(/name/i)).toBeInTheDocument();
    expect(screen.getByText(/birthday/i)).toBeInTheDocument();
    expect(screen.getByText(/department/i)).toBeInTheDocument();
    expect(screen.getByText(/gender/i)).toBeInTheDocument();
    expect(screen.getByText(/image/i)).toBeInTheDocument();
  });

  it('create user', async () => {
    const { container } = render(<CreateForm />);

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

    const userCard = await screen.findByText(/John/i);
    expect(userCard).toBeInTheDocument();
  });
});
