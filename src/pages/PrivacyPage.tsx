import React from 'react';
import { Shield, Lock } from 'lucide-react';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Lock className="h-16 w-16 text-primary-500 mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold text-dark-700 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-dark-500">
            Last updated: January 1, 2024
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-dark-700 mb-4">1. Information We Collect</h2>
            <p className="text-dark-600 mb-6">
              CoverCell collects information necessary to provide insurance services and improve your experience:
            </p>

            <h3 className="text-xl font-semibold text-dark-700 mb-3">Personal Information:</h3>
            <ul className="list-disc pl-6 mb-6 text-dark-600">
              <li>Name, email address, and phone number</li>
              <li>Physical address for service delivery</li>
              <li>Payment information (processed securely by our payment partners)</li>
              <li>Device information (model, serial number, IMEI)</li>
            </ul>

            <h3 className="text-xl font-semibold text-dark-700 mb-3">Device Photos:</h3>
            <ul className="list-disc pl-6 mb-6 text-dark-600">
              <li>Photos of your device for verification and claims processing</li>
              <li>Images are stored securely and used only for insurance purposes</li>
              <li>Photos may be shared with repair partners when processing claims</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark-700 mb-4">2. How We Use Your Information</h2>
            <p className="text-dark-600 mb-6">
              Your information is used exclusively for providing insurance services:
            </p>
            <ul className="list-disc pl-6 mb-6 text-dark-600">
              <li>Processing insurance applications and claims</li>
              <li>Communicating about your policy and claims status</li>
              <li>Preventing fraud and ensuring policy compliance</li>
              <li>Improving our services and customer experience</li>
              <li>Sending important policy updates and notifications</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark-700 mb-4">3. Information Sharing</h2>
            <p className="text-dark-600 mb-6">
              We do not sell your personal information. We may share information only in these circumstances:
            </p>
            <ul className="list-disc pl-6 mb-6 text-dark-600">
              <li>With repair partners to process approved claims</li>
              <li>With payment processors to handle transactions</li>
              <li>With law enforcement when required by law</li>
              <li>With your explicit consent for specific purposes</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark-700 mb-4">4. Data Security</h2>
            <p className="text-dark-600 mb-6">
              We implement industry-standard security measures to protect your information:
            </p>
            <ul className="list-disc pl-6 mb-6 text-dark-600">
              <li>SSL encryption for all data transmission</li>
              <li>Secure servers with regular security updates</li>
              <li>Limited access to personal information by authorized personnel only</li>
              <li>Regular security audits and monitoring</li>
              <li>Secure deletion of data when no longer needed</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark-700 mb-4">5. Cookies and Tracking</h2>
            <p className="text-dark-600 mb-6">
              Our website uses cookies to improve your experience:
            </p>
            <ul className="list-disc pl-6 mb-6 text-dark-600">
              <li>Essential cookies for website functionality</li>
              <li>Analytics cookies to understand website usage (anonymized)</li>
              <li>Preference cookies to remember your settings</li>
              <li>You can disable cookies in your browser settings</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark-700 mb-4">6. Third-Party Services</h2>
            <p className="text-dark-600 mb-6">
              We work with trusted partners to provide our services:
            </p>
            <ul className="list-disc pl-6 mb-6 text-dark-600">
              <li>Payment processing (Stripe, PayPal)</li>
              <li>Email communications (SendGrid)</li>
              <li>Analytics (Google Analytics - anonymized)</li>
              <li>Customer support tools</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark-700 mb-4">7. Your Rights</h2>
            <p className="text-dark-600 mb-6">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 mb-6 text-dark-600">
              <li>Access: Request a copy of your personal information</li>
              <li>Correction: Update or correct inaccurate information</li>
              <li>Deletion: Request deletion of your personal information</li>
              <li>Portability: Receive your data in a portable format</li>
              <li>Opt-out: Unsubscribe from marketing communications</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark-700 mb-4">8. Data Retention</h2>
            <p className="text-dark-600 mb-6">
              We retain your information only as long as necessary:
            </p>
            <ul className="list-disc pl-6 mb-6 text-dark-600">
              <li>Active policies: Information retained while policy is active</li>
              <li>Cancelled policies: Information retained for 7 years for legal compliance</li>
              <li>Claims data: Retained for 10 years for fraud prevention</li>
              <li>Marketing data: Deleted immediately upon opt-out request</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark-700 mb-4">9. Contact for Data Requests</h2>
            <p className="text-dark-600 mb-6">
              To exercise your privacy rights or request data deletion, contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-dark-600 mb-2"><strong>Privacy Officer:</strong> privacy@covercell.com</p>
              <p className="text-dark-600 mb-2"><strong>Phone:</strong> 1-800-COVERCELL</p>
              <p className="text-dark-600 mb-2"><strong>Mail:</strong> Privacy Department</p>
              <p className="text-dark-600">CoverCell, 123 Insurance Ave, Protection City, PC 12345</p>
            </div>

            <h2 className="text-2xl font-bold text-dark-700 mb-4">10. Policy Updates</h2>
            <p className="text-dark-600 mb-6">
              We may update this privacy policy periodically. Significant changes will be communicated via:
            </p>
            <ul className="list-disc pl-6 mb-6 text-dark-600">
              <li>Email notification to registered users</li>
              <li>Prominent notice on our website</li>
              <li>In-app notifications for mobile users</li>
              <li>Updated "Last modified" date at the top of this policy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;