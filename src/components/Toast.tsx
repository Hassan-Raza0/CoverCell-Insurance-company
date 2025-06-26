import React, { useState, useEffect } from 'react';
import { CheckCircle, AlertCircle, X } from 'lucide-react';

interface ToastProps {
  message?: string;
  type?: 'success' | 'error' | 'info';
  show?: boolean;
  onClose?: () => void;
}

const Toast: React.FC<ToastProps> = ({ 
  message = '', 
  type = 'success', 
  show = false, 
  onClose 
}) => {
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    setIsVisible(show);
    if (show) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose?.();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!isVisible || !message) return null;

  const getToastStyles = () => {
    switch (type) {
      case 'success':
        return 'bg-green-50 border-green-200 text-green-800';
      case 'error':
        return 'bg-red-50 border-red-200 text-red-800';
      default:
        return 'bg-blue-50 border-blue-200 text-blue-800';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'error':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      default:
        return <AlertCircle className="h-5 w-5 text-blue-500" />;
    }
  };

  return (
    <div className="fixed top-20 right-4 z-50 animate-slide-in">
      <div className={`flex items-center p-4 border rounded-lg shadow-lg ${getToastStyles()}`}>
        {getIcon()}
        <span className="ml-3 text-sm font-medium">{message}</span>
        <button
          onClick={() => {
            setIsVisible(false);
            onClose?.();
          }}
          className="ml-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default Toast;