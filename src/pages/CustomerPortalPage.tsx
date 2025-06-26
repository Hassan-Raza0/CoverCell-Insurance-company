import React, { useState } from 'react';
import { Shield, CreditCard, Download, AlertCircle, CheckCircle, X, Calendar, Phone } from 'lucide-react';

const CustomerPortalPage = () => {
  const [showCancelModal, setShowCancelModal] = useState(false);

  // Mock customer data
  const customerData = {
    name: 'John Smith',
    email: 'john@example.com',
    phone: '+1-234-567-8901',
    planType: 'Yearly',
    planPrice: '$125.00',
    status: 'Active',
    nextPayment: '2025-01-15',
    phoneModel: 'iPhone 15 Pro',
    coverage: {
      accident: true,
      theft: true,
      liquid: true,
      extended: true
    }
  };

  const paymentHistory = [
    { id: 1, date: '2024-01-15', amount: '$125.00', status: 'Paid', method: 'Credit Card' },
    { id: 2, date: '2023-01-15', amount: '$125.00', status: 'Paid', method: 'Credit Card' }
  ];

  const CancelModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-dark-700">Cancel Subscription</h3>
          <button onClick={() => setShowCancelModal(false)} className="text-gray-400 hover:text-gray-600">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="mb-6">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
              <p className="text-sm text-red-700">
                Canceling your subscription will remove all coverage for your device immediately.
              </p>
            </div>
          </div>
          
          <p className="text-dark-600 mb-4">Are you sure you want to cancel your phone insurance? This action cannot be undone.</p>
          
          <div className="space-y-2">
            <p className="text-sm text-dark-500">• Your current coverage will end immediately</p>
            <p className="text-sm text-dark-500">• No refund will be issued for the current billing period</p>
            <p className="text-sm text-dark-500">• You can re-subscribe at any time</p>
          </div>
        </div>
        
        <div className="flex justify-end space-x-3">
          <button
            onClick={() => setShowCancelModal(false)}
            className="px-4 py-2 text-dark-600 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Keep Subscription
          </button>
          <button
            onClick={() => {
              setShowCancelModal(false);
              alert('Subscription cancelled (Demo)');
            }}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Cancel Subscription
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-dark-700 mb-2">Customer Portal</h1>
          <p className="text-dark-500">Manage your phone insurance and view coverage details</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Plan Status Card */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Shield className="h-8 w-8 text-primary-500 mr-3" />
                  <div>
                    <h2 className="text-xl font-bold text-dark-700">Current Plan</h2>
                    <p className="text-dark-500">Your phone is protected</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full flex items-center">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  {customerData.status}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-dark-700 mb-3">Plan Details</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-dark-500">Plan Type:</span>
                      <span className="font-medium text-dark-700">{customerData.planType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-dark-500">Monthly Cost:</span>
                      <span className="font-medium text-dark-700">{customerData.planPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-dark-500">Next Payment:</span>
                      <span className="font-medium text-dark-700">{customerData.nextPayment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-dark-500">Device:</span>
                      <span className="font-medium text-dark-700">{customerData.phoneModel}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-dark-700 mb-3">Coverage</h3>
                  <div className="space-y-2">
                    {Object.entries(customerData.coverage).map(([key, covered]) => (
                      <div key={key} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-dark-600 capitalize">
                          {key === 'liquid' ? 'Liquid Damage' : 
                           key === 'extended' ? 'Extended Warranty' :
                           key.charAt(0).toUpperCase() + key.slice(1)} Protection
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <button
                  onClick={() => setShowCancelModal(true)}
                  className="text-red-600 hover:text-red-700 font-medium"
                >
                  Cancel Subscription
                </button>
              </div>
            </div>

            {/* Payment History */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-dark-700">Payment History</h2>
                <button className="flex items-center text-primary-600 hover:text-primary-700 font-medium">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-dark-500">Date</th>
                      <th className="text-left py-3 px-4 font-medium text-dark-500">Amount</th>
                      <th className="text-left py-3 px-4 font-medium text-dark-500">Method</th>
                      <th className="text-left py-3 px-4 font-medium text-dark-500">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paymentHistory.map((payment) => (
                      <tr key={payment.id} className="border-b border-gray-100">
                        <td className="py-3 px-4 text-dark-700">{payment.date}</td>
                        <td className="py-3 px-4 text-dark-700 font-medium">{payment.amount}</td>
                        <td className="py-3 px-4 text-dark-500">{payment.method}</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
                            {payment.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-dark-700 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center px-4 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
                  <Phone className="h-4 w-4 mr-2" />
                  File a Claim
                </button>
                <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 text-dark-600 rounded-lg hover:bg-gray-50 transition-colors">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Update Payment Method
                </button>
                <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 text-dark-600 rounded-lg hover:bg-gray-50 transition-colors">
                  <Calendar className="h-4 w-4 mr-2" />
                  Change Plan
                </button>
              </div>
            </div>

            {/* Contact Support */}
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
              <p className="text-primary-100 mb-4 text-sm">
                Our support team is available 24/7 to assist you with any questions or claims.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>1-800-COVERCELL</span>
                </div>
                <div className="flex items-center">
                  <CreditCard className="h-4 w-4 mr-2" />
                  <span>support@covercell.com</span>
                </div>
              </div>
            </div>

            {/* Account Info */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-dark-700 mb-4">Account Information</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm text-dark-500">Name</label>
                  <p className="font-medium text-dark-700">{customerData.name}</p>
                </div>
                <div>
                  <label className="text-sm text-dark-500">Email</label>
                  <p className="font-medium text-dark-700">{customerData.email}</p>
                </div>
                <div>
                  <label className="text-sm text-dark-500">Phone</label>
                  <p className="font-medium text-dark-700">{customerData.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showCancelModal && <CancelModal />}
    </div>
  );
};

export default CustomerPortalPage;