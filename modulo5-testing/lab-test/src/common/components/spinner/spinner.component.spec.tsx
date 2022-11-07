import React from 'react';
import { render, screen } from '@testing-library/react';
import { SpinnerComponent } from './spinner.component';
import * as promiseTracker from 'react-promise-tracker/lib/trackerHook';

// Si queremos mockear hay que ponerlo fuera y con mockReturnValueOnce se puede encadenar
// jest.mock('react-promise-tracker', () => {
//   return {
//     usePromiseTracker: jest
//       .fn()
//       .mockResolvedValueOnce({ promiseInProgress: true })
//       .mockResolvedValue({ promiseInProgress: false }),
//   };
// });

describe('spinner component spec', () => {
  it('should be empty when it returns false, react-promise-tracker', () => {
    // Arrange
    // Create stub
    const promiseTrackerStub = jest
      .spyOn(promiseTracker, 'usePromiseTracker')
      .mockReturnValue({ promiseInProgress: false });

    // Act
    render(<SpinnerComponent />);
    const presentation = screen.queryByRole('presentation');

    // Assert
    expect(presentation).toBe(null);
  });

  it('Should be render modal when react-promise-tracker return true', () => {
    // Arrange
    // Create stub
    const promiseTrackerStub = jest
      .spyOn(promiseTracker, 'usePromiseTracker')
      .mockReturnValue({ promiseInProgress: true });

    // Act
    render(<SpinnerComponent />);
    const presentation = screen.queryByRole('presentation');

    // Assert
    expect(presentation).toBeInTheDocument();
  });
});
