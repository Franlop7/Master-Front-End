import { useConfirmationDialog } from './confirmation-dialog.hook';
import { renderHook, act } from '@testing-library/react';
import { Lookup } from 'common/models';

describe('useConfirmationDialog specs', () => {
  it('Should set isopen to false when call onclose after open the dialog', () => {
    // Arrange
    const newItemToDelete: Lookup = { id: 'test id', name: 'test name' };

    // Act step 1
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(newItemToDelete);
    });

    // Assert step 1
    expect(result.current.isOpen).toEqual(true);

    // Act step 2
    act(() => {
      result.current.onClose();
    });

    // Assert step 2
    expect(result.current.isOpen).toEqual(false);
  });

  it('should reset itemToDelete when call onAccept after open the dialog', () => {
    // Arrange
    const newItemToDelete: Lookup = { id: 'test id', name: 'test name' };

    // Act step 1
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(newItemToDelete);
    });

    // Assert step 1
    expect(result.current.isOpen).toEqual(true);
    expect(result.current.itemToDelete).toEqual(newItemToDelete);

    // Act step 2
    act(() => {
      result.current.onAccept();
    });

    // Assert step 2
    const expectedItemToDelete: Lookup = { id: '', name: '' };
    expect(result.current.isOpen).toEqual(true);
    expect(result.current.itemToDelete).toEqual(expectedItemToDelete);
  });

  it('should update itemToDelete and isOpen when it call onOpenDialog', () => {
    // Arrange
    const newItemToDelete: Lookup = { id: 'test id', name: 'test name' };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(newItemToDelete);
    });

    // Assert
    expect(result.current.itemToDelete).toEqual(newItemToDelete);
    expect(result.current.isOpen).toEqual(true);
  });

});
