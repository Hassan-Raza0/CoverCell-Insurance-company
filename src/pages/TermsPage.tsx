import React from 'react';
import { Shield, FileText } from 'lucide-react';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <FileText className="h-16 w-16 text-primary-500 mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold text-dark-700 mb-4">
            Terms & Conditions
          </h1>
          <p className="text-xl text-dark-500">
            Last updated: January 1, 2024
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-dark-700 mb-4">1. Coverage Policy</h2>
            <p className="text-dark-600 mb-6">
              CoverCell provides comprehensive phone insurance coverage for accidental damage, theft, and liquid damage. 
              Coverage begins immediately upon successful registration and payment of the first premium.
            </p>

            <h3 className="text-xl font-semibold text-dark-700 mb-3">What's Covered:</h3>
            <ul className="list-disc pl-6 mb-6 text-dark-600">
              <li>Accidental damage including drops and impacts</li>
              <li>Liquid damage from spills or submersion</li>
              <li>Theft when reported to local authorities within 48 hours</li>
              <li>Mechanical breakdown after manufacturer warranty expires</li>
            </ul>

            <h3 className="text-xl font-semibold text-dark-700 mb-3">What's Not Covered:</h3>
            <ul className="list-disc pl-6 mb-6 text-dark-600">
              <li>Pre-existing damage or defects</li>
              <li>Intentional damage or misuse</li>
              <li>Loss without theft (misplacement)</li>
              <li>Cosmetic damage that doesn't affect functionality</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark-700 mb-4">2. Eligibility Rules</h2>
            <p className="text-dark-600 mb-6">
              To be eligible for CoverCell insurance, your device must meet the following criteria:
            </p>
            <ul className="list-disc pl-6 mb-6 text-dark-600">
              <li>Device must be less than 12 months old at time of registration</li>
              <li>Device must be in full working condition with no existing damage</li>
              <li>Valid proof of purchase may be required</li>
              <li>Device must be registered within 30 days of purchase</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark-700 mb-4">3. Claims Process</h2>
            <p className="text-dark-600 mb-6">
              Filing a claim is simple through your customer portal:
            </p>
            <ol className="list-decimal pl-6 mb-6 text-dark-600">
              <li>Log into your customer portal and select "File a Claim"</li>
              <li>Provide details about the incident and upload photos</li>
              <li>Submit required documentation (police report for theft)</li>
              <li>Receive claim decision within 24-48 hours</li>
              <li>Approved claims are processed for repair or replacement</li>
            </ol>

            <h2 className="text-2xl font-bold text-dark-700 mb-4">4. Refund & Cancellation Policy</h2>
            <p className="text-dark-600 mb-6">
              You may cancel your CoverCell policy at any time:
            </p>
            <ul className="list-disc pl-6 mb-6 text-dark-600">
              <li>Monthly plans: Cancel anytime with no penalty</li>
              <li>Yearly plans: Prorated refund available for unused months</li>
              <li>Cancellation takes effect at the end of current billing period</li>
              <li>No refunds for partial months or after claims are filed</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark-700 mb-4">5. Payment Terms</h2>
            <p className="text-dark-600 mb-6">
              Payment is due monthly or annually based on your selected plan:
            </p>
            <ul className="list-disc pl-6 mb-6 text-dark-600">
              <li>Monthly plans: $12.99 charged monthly on registration date</li>
              <li>Yearly plans: $125.00 charged annually on registration date</li>
              <li>Failed payments result in policy suspension after 7 days</li>
              <li>Reinstatement requires payment of all outstanding amounts</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark-700 mb-4">6. Limitation of Liability</h2>
            <p className="text-dark-600 mb-6">
              CoverCell's liability is limited to the replacement value of your device or repair costs, 
              whichever is less. We are not liable for data loss, consequential damages, or indirect losses.
            </p>

            <h2 className="text-2xl font-bold text-dark-700 mb-4">7. Contact Information</h2>
            <p className="text-dark-600 mb-6">
              For questions about these terms or your coverage, contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-dark-600 mb-2"><strong>Phone:</strong> 1-800-COVERCELL</p>
              <p className="text-dark-600 mb-2"><strong>Email:</strong> support@covercell.com</p>
              <p className="text-dark-600"><strong>Address:</strong> 123 Insurance Ave, Protection City, PC 12345</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;