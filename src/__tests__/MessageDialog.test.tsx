import { render, fireEvent, screen } from '@testing-library/react';
import {MessageDialog} from '../components';

describe('MessageDialog Component', () => {
  it('renders dialog with title, description, buttons, and callback functions', () => {
    const onCloseMock = jest.fn();
    const onButtonClickMock = jest.fn();

    render(
      <MessageDialog
        title="Test Title"
        description="Test Description"
        button="Test Button"
        closeButton="Close"
        onClose={onCloseMock}
        onButtonClick={onButtonClickMock}
      />
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('Test Button')).toBeInTheDocument();
    expect(screen.getByText('Close')).toBeInTheDocument();
  });

  it('calls onClose and onButtonClick callbacks when buttons are clicked', () => {
    const onCloseMock = jest.fn();
    const onButtonClickMock = jest.fn();

    render(
      <MessageDialog
        title="Test Title"
        description="Test Description"
        button="Test Button"
        closeButton="Close"
        onClose={onCloseMock}
        onButtonClick={onButtonClickMock}
      />
    );

    fireEvent.click(screen.getByText('Close'));
    fireEvent.click(screen.getByText('Test Button'));

    expect(onCloseMock).toHaveBeenCalledTimes(1);
    expect(onButtonClickMock).toHaveBeenCalledTimes(1);
  });
});
