import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Shield } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="mb-8">
          <Shield className="h-20 w-20 text-primary-500 mx-auto mb-6" />
          <h1 className="text-6xl font-bold text-dark-700 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-dark-700 mb-4">Page Not Found</h2>
          <p className="text-dark-500 mb-8">
            Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            <Home className="h-5 w-5 mr-2" />
            Go to Homepage
          </Link>
          
          <div className="text-center">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go Back
            </button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-dark-700 mb-4">Need Help?</h3>
          <div className="space-y-2 text-sm text-dark-500">
            <p>📞 Call us: 1-800-COVERCELL</p>
            <p>✉️ Email: support@covercell.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;