import { render, screen } from '@testing-library/react';
import { NoDataFoundModal } from '../components';

describe('NoDataModal Component', () => {
    it('renders title and description correctly', () => {
        render(
            <NoDataFoundModal
                title="No Data Found"
                description="There is no data available at the moment."
            />
        );

        expect(screen.getByText('No Data Found')).toBeInTheDocument();
        expect(screen.getByText('There is no data available at the moment.')).toBeInTheDocument();
    });
});
