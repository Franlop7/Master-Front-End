import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

describe('Confirmation Dialog component', () => {
  it('should call onAccept and onClose methods when clicking on accept button', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Test dialog heading',
      labels: {
        closeButton: 'Close',
        acceptButton: 'Accept',
      },
    };

    // Act
    const { getByRole } = render(
      <ConfirmationDialogComponent {...props}>
        <h1>texto prueba</h1>
      </ConfirmationDialogComponent>
    );
    const acceptButton = getByRole('button', { name: /accept/i });
    fireEvent.click(acceptButton);

    // Assert
    expect(props.onAccept).toHaveBeenCalled();
    expect(props.onClose).toHaveBeenCalled();
  });

  it('should call onClose method when clicking on close button', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Test dialog heading',
      labels: {
        closeButton: 'Close',
        acceptButton: 'Accept',
      },
    };

    // Act
    const { getByRole } = render(
      <ConfirmationDialogComponent {...props}>
        <h1>texto prueba</h1>
      </ConfirmationDialogComponent>
    );
    const closeButton = getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);

    // Assert
    expect(props.onClose).toHaveBeenCalled();
  });

  it('should be render empty when isOpen is false', () => {
    // Arrange
    const props = {
      isOpen: false,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Test dialog heading',
      labels: {
        closeButton: 'Close',
        acceptButton: 'Accept',
      },
    };

    // Act
    const { queryByRole } = render(
      <ConfirmationDialogComponent {...props}>
        <h1>texto prueba</h1>
      </ConfirmationDialogComponent>
    );

    // Assert
    expect(
      queryByRole('heading', {
        name: /test dialog heading/i,
      })
    ).toBe(null);
  });
});
