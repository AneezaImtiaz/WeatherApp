import React from 'react';
import './MessageDialog.css';

type MessageDialogProps = {
    title: string;
    button: string;
    onButtonClick: (() => void); 
    message: string;
    closeButton: string;
    onClose: (() => void);
  };
  
  const MessageDialog: React.FC<MessageDialogProps> = ({ title, message, button, closeButton = 'Close', onClose = () => null, onButtonClick = () => null,}) => {
  return (
    <div className="alert-overlay">
      <div className="alert-content">
        <h2>{title}</h2>
        <p>{message}</p>
        <button onClick={onClose}>{closeButton}</button>
        <button onClick={onButtonClick}>{button}</button>
      </div>
    </div>
  );
};

export default MessageDialog;
