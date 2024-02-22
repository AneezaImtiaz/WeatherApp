import React from 'react';
import './NoDataModal.css';

type NoDataModalProps = {
    title: string;
    description: string;
};


const NoDataModal: React.FC<NoDataModalProps> = ({ title, description }) => {
    return (
        <div className="no-data-dialog">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default NoDataModal;
