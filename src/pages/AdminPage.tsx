import React, { useState } from 'react';
import { Users, Settings, BarChart3, Shield, Plus, Edit, Trash2, Building, UserCheck } from 'lucide-react';

const AdminPage = () => {
  const [activeSection, setActiveSection] = useState('users');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<'shop' | 'employee' | 'plan'>('shop');

  // Mock data
  const shops = [
    { id: 1, name: 'Downtown Store', address: '123 Main St', manager: 'John Manager', employees: 5, status: 'Active' },
    { id: 2, name: 'Mall Location', address: '456 Mall Ave', manager: 'Jane Supervisor', employees: 8, status: 'Active' },
    { id: 3, name: 'Airport Branch', address: '789 Airport Rd', manager: 'Bob Leader', employees: 3, status: 'Inactive' }
  ];

  const employees = [
    { id: 1, name: 'Mike Johnson', email: 'mike@covercell.com', shop: 'Downtown Store', role: 'Sales Rep', status: 'Active' },
    { id: 2, name: 'Lisa Davis', email: 'lisa@covercell.com', shop: 'Mall Location', role: 'Sales Rep', status: 'Active' },
    { id: 3, name: 'Tom Wilson', email: 'tom@covercell.com', shop: 'Downtown Store', role: 'Manager', status: 'Active' }
  ];

  const plans = [
    { id: 1, name: 'Monthly Plan', price: '$12.99', duration: '1 month', features: 4, status: 'Active' },
    { id: 2, name: 'Yearly Plan', price: '$125.00', duration: '12 months', features: 6, status: 'Active' }
  ];

  const openModal = (type: 'shop' | 'employee' | 'plan') => {
    setModalType(type);
    setShowModal(true);
  };

  const Modal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
        <h3 className="text-xl font-bold text-dark-700 mb-4">
          Add New {modalType.charAt(0).toUpperCase() + modalType.slice(1)}
        </h3>
        
        <form className="space-y-4">
          {modalType === 'shop' && (
            <>
              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">Shop Name</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">Address</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">Manager</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
              </div>
            </>
          )}
          
          {modalType === 'employee' && (
            <>
              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">Full Name</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">Email</label>
                <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">Shop</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                  <option>Downtown Store</option>
                  <option>Mall Location</option>
                  <option>Airport Branch</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">Role</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                  <option>Sales Rep</option>
                  <option>Manager</option>
                  <option>Admin</option>
                </select>
              </div>
            </>
          )}
          
          {modalType === 'plan' && (
            <>
              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">Plan Name</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">Price</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">Duration</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                  <option>1 month</option>
                  <option>3 months</option>
                  <option>6 months</option>
                  <option>12 months</option>
                </select>
              </div>
            </>
          )}
        </form>
        
        <div className="flex justify-end space-x-3 mt-6">
          <button
            onClick={() => setShowModal(false)}
            className="px-4 py-2 text-dark-600 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={() => setShowModal(false)}
            className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600"
          >
            Add {modalType.charAt(0).toUpperCase() + modalType.slice(1)}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-dark-700 mb-2">Admin Panel</h1>
          <p className="text-dark-500">Manage users, settings, and system configuration</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-dark-500 mb-1">Total Shops</p>
                <p className="text-2xl font-bold text-dark-700">3</p>
              </div>
              <Building className="h-8 w-8 text-blue-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-dark-500 mb-1">Employees</p>
                <p className="text-2xl font-bold text-dark-700">16</p>
              </div>
              <UserCheck className="h-8 w-8 text-green-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-dark-500 mb-1">Active Plans</p>
                <p className="text-2xl font-bold text-dark-700">2</p>
              </div>
              <Shield className="h-8 w-8 text-primary-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-dark-500 mb-1">System Health</p>
                <p className="text-2xl font-bold text-green-600">Good</p>
              </div>
              <BarChart3 className="h-8 w-8 text-purple-500" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          {/* Navigation Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'users', label: 'User Management', icon: Users },
                { id: 'plans', label: 'Plan Management', icon: Shield },
                { id: 'reports', label: 'Reports', icon: BarChart3 },
                { id: 'settings', label: 'Settings', icon: Settings }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id)}
                  className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm ${
                    activeSection === tab.id
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-dark-500 hover:text-dark-700'
                  }`}
                >
                  <tab.icon className="h-4 w-4 mr-2" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeSection === 'users' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-dark-700">User Management</h2>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => openModal('shop')}
                      className="flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Shop
                    </button>
                    <button
                      onClick={() => openModal('employee')}
                      className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Employee
                    </button>
                  </div>
                </div>

                {/* Shops Table */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-dark-700 mb-4">Shops</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">Shop Name</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">Address</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">Manager</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">Employees</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">Status</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {shops.map((shop) => (
                          <tr key={shop.id}>
                            <td className="px-6 py-4 whitespace-nowrap font-medium text-dark-700">{shop.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-dark-500">{shop.address}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-dark-500">{shop.manager}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-dark-500">{shop.employees}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                                shop.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                              }`}>
                                {shop.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex space-x-2">
                                <button className="text-blue-600 hover:text-blue-900">
                                  <Edit className="h-4 w-4" />
                                </button>
                                <button className="text-red-600 hover:text-red-900">
                                  <Trash2 className="h-4 w-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Employees Table */}
                <div>
                  <h3 className="text-lg font-semibold text-dark-700 mb-4">Employees</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">Name</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">Email</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">Shop</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">Role</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">Status</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {employees.map((employee) => (
                          <tr key={employee.id}>
                            <td className="px-6 py-4 whitespace-nowrap font-medium text-dark-700">{employee.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-dark-500">{employee.email}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-dark-500">{employee.shop}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-dark-500">{employee.role}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                                {employee.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex space-x-2">
                                <button className="text-blue-600 hover:text-blue-900">
                                  <Edit className="h-4 w-4" />
                                </button>
                                <button className="text-red-600 hover:text-red-900">
                                  <Trash2 className="h-4 w-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'plans' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-dark-700">Plan Management</h2>
                  <button
                    onClick={() => openModal('plan')}
                    className="flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Plan
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">Plan Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">Price</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">Duration</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">Features</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {plans.map((plan) => (
                        <tr key={plan.id}>
                          <td className="px-6 py-4 whitespace-nowrap font-medium text-dark-700">{plan.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-dark-500">{plan.price}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-dark-500">{plan.duration}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-dark-500">{plan.features} features</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                              {plan.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex space-x-2">
                              <button className="text-blue-600 hover:text-blue-900">
                                <Edit className="h-4 w-4" />
                              </button>
                              <button className="text-red-600 hover:text-red-900">
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeSection === 'reports' && (
              <div className="text-center py-12">
                <BarChart3 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-700 mb-2">Reports & Analytics</h3>
                <p className="text-dark-500">Comprehensive reporting dashboard coming soon</p>
              </div>
            )}

            {activeSection === 'settings' && (
              <div className="text-center py-12">
                <Settings className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-700 mb-2">System Settings</h3>
                <p className="text-dark-500">Configuration and system settings panel coming soon</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {showModal && <Modal />}
    </div>
  );
};

export default AdminPage;