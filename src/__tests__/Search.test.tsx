import { render, fireEvent, screen } from '@testing-library/react';
import {Search} from '../components';

describe('Search Component', () => {
    it('renders search input and button', () => {
      render(<Search buttonClick={() => {}} />);
      
      expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
      expect(screen.getByText('Search')).toBeInTheDocument();
    });
  
    it('calls buttonClick callback with city when search button is clicked', () => {
      const buttonClickMock = jest.fn();
      render(<Search buttonClick={buttonClickMock} />);
  
      fireEvent.change(screen.getByPlaceholderText('Search...'), { target: { value: 'New York' } });
      fireEvent.click(screen.getByText('Search'));
  
      expect(buttonClickMock).toHaveBeenCalledWith('New York');
    });
  
    it('shows empty field dialog when search button is clicked with empty input', () => {
      render(<Search buttonClick={() => {}} />);
  
      fireEvent.click(screen.getByText('Search'));
      expect(screen.getByText('Close')).toBeInTheDocument();
    });
  });