import React from 'react';
import './MessageDialog.css';

type MessageDialogProps = {
    title: string;
    message: string;
    button: string;
    onClose: (() => void);
  };
  
  const MessageDialog: React.FC<MessageDialogProps> = ({ title, message, button, onClose = () => null, }) => {
  return (
    <div className="alert-overlay">
      <div className="alert-content">
        <h2>{title}</h2>
        <p>{message}</p>
        <button onClick={onClose}>{button}</button>
      </div>
    </div>
  );
};

export default MessageDialog;
