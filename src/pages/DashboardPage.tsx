import React, { useState } from 'react';
import { Search, Filter, Download, Users, DollarSign, Shield, TrendingUp, Eye, Edit, Trash2, Bell, AlertTriangle } from 'lucide-react';

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('customers');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [planFilter, setPlanFilter] = useState('all');
  const [shopFilter, setShopFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Mock user role - in real app this would come from auth context
  const userRole = 'admin'; // 'admin', 'shop_owner', 'employee'

  // Mock data
  const customers = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john@example.com',
      phone: '+1-234-567-8901',
      phoneModel: 'iPhone 15 Pro',
      plan: 'Yearly',
      status: 'Active',
      joinDate: '2024-01-15',
      lastPayment: '$125.00',
      shop: 'Downtown Store',
      employee: 'Mike Johnson',
      expiryDate: '2025-01-15'
    },
    {
      id: 2,
      name: 'Sarah Wilson',
      email: 'sarah@example.com',
      phone: '+1-234-567-8902',
      phoneModel: 'Samsung Galaxy S24',
      plan: 'Monthly',
      status: 'Active',
      joinDate: '2024-02-20',
      lastPayment: '$12.99',
      shop: 'Mall Location',
      employee: 'Lisa Davis',
      expiryDate: '2024-12-20'
    },
    {
      id: 3,
      name: 'Robert Brown',
      email: 'robert@example.com',
      phone: '+1-234-567-8903',
      phoneModel: 'iPhone 14',
      plan: 'Monthly',
      status: 'Inactive',
      joinDate: '2023-12-10',
      lastPayment: '$12.99',
      shop: 'Downtown Store',
      employee: 'Mike Johnson',
      expiryDate: '2024-11-10'
    },
    {
      id: 4,
      name: 'Emily Davis',
      email: 'emily@example.com',
      phone: '+1-234-567-8904',
      phoneModel: 'Google Pixel 8',
      plan: 'Yearly',
      status: 'Active',
      joinDate: '2024-03-05',
      lastPayment: '$125.00',
      shop: 'Airport Branch',
      employee: 'Tom Wilson',
      expiryDate: '2025-03-05'
    }
  ];

  const stats = [
    {
      label: 'Total Customers',
      value: '2,847',
      change: '+12%',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      label: 'Active Customers',
      value: '2,456',
      change: '+8%',
      icon: Shield,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      label: 'Monthly Revenue',
      value: '$34,290',
      change: '+15%',
      icon: DollarSign,
      color: 'text-primary-600',
      bgColor: 'bg-primary-50'
    },
    {
      label: 'Expiring Soon',
      value: '23',
      change: '+3',
      icon: AlertTriangle,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.phoneModel.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || customer.status.toLowerCase() === statusFilter;
    const matchesPlan = planFilter === 'all' || customer.plan.toLowerCase() === planFilter.toLowerCase();
    const matchesShop = shopFilter === 'all' || customer.shop === shopFilter;
    
    return matchesSearch && matchesStatus && matchesPlan && matchesShop;
  });

  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCustomers = filteredCustomers.slice(startIndex, startIndex + itemsPerPage);

  const handleExport = () => {
    alert('Export functionality would be implemented here');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-dark-700 mb-2">
                {userRole === 'admin' ? 'Admin Dashboard' : 
                 userRole === 'shop_owner' ? 'Shop Dashboard' : 
                 'Employee Dashboard'}
              </h1>
              <p className="text-dark-500">Monitor your insurance business performance</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-dark-600 hover:text-primary-600 transition-colors">
                <Bell className="h-6 w-6" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="text-right">
                <p className="text-sm font-medium text-dark-700">Welcome back!</p>
                <p className="text-sm text-dark-500">
                  {userRole === 'admin' ? 'System Administrator' : 
                   userRole === 'shop_owner' ? 'Shop Owner' : 
                   'Sales Representative'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-dark-500 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-dark-700">{stat.value}</p>
                  <p className="text-sm text-green-600 font-medium">{stat.change} from last month</p>
                </div>
                <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('customers')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'customers'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-dark-500 hover:text-dark-700'
                }`}
              >
                Customer Management
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'analytics'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-dark-500 hover:text-dark-700'
                }`}
              >
                Analytics & Reports
              </button>
            </nav>
          </div>

          {activeTab === 'customers' && (
            <div>
              {/* Controls */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
                  <div className="flex flex-col sm:flex-row gap-4 flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="text"
                        placeholder="Search customers..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 w-64"
                      />
                    </div>
                    
                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="all">All Status</option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>

                    <select
                      value={planFilter}
                      onChange={(e) => setPlanFilter(e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="all">All Plans</option>
                      <option value="monthly">Monthly</option>
                      <option value="yearly">Yearly</option>
                    </select>

                    <select
                      value={shopFilter}
                      onChange={(e) => setShopFilter(e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="all">All Shops</option>
                      <option value="Downtown Store">Downtown Store</option>
                      <option value="Mall Location">Mall Location</option>
                      <option value="Airport Branch">Airport Branch</option>
                    </select>
                  </div>
                  
                  <button 
                    onClick={handleExport}
                    className="flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Export to Excel
                  </button>
                </div>
              </div>

              {/* Customer Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase tracking-wider">Customer</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase tracking-wider">Phone</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase tracking-wider">Plan</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase tracking-wider">Shop/Employee</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase tracking-wider">Expiry</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {paginatedCustomers.map((customer) => (
                      <tr key={customer.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-dark-700">{customer.name}</div>
                            <div className="text-sm text-dark-500">{customer.email}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-dark-700">{customer.phoneModel}</div>
                            <div className="text-sm text-dark-500">{customer.phone}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            customer.plan === 'Yearly' 
                              ? 'bg-primary-100 text-primary-800' 
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {customer.plan}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            customer.status === 'Active' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {customer.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-dark-700">{customer.shop}</div>
                            <div className="text-sm text-dark-500">{customer.employee}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-dark-700">
                          {customer.expiryDate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex items-center space-x-2">
                            <button 
                              className="text-primary-600 hover:text-primary-900 p-1 rounded hover:bg-primary-50 transition-colors"
                              title="View Details"
                            >
                              <Eye className="h-4 w-4" />
                            </button>
                            <button 
                              className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50 transition-colors"
                              title="Edit Customer"
                            >
                              <Edit className="h-4 w-4" />
                            </button>
                            {userRole === 'admin' && (
                              <button 
                                className="text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-50 transition-colors"
                                title="Delete Customer"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="px-6 py-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-dark-500">
                    Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredCustomers.length)} of {filteredCustomers.length} results
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className="px-3 py-1 border border-gray-300 rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                    >
                      Previous
                    </button>
                    {[...Array(totalPages)].map((_, i) => (
                      <button
                        key={i + 1}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`px-3 py-1 border rounded text-sm ${
                          currentPage === i + 1
                            ? 'bg-primary-500 text-white border-primary-500'
                            : 'border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                    <button
                      onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                      className="px-3 py-1 border border-gray-300 rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="p-6">
              <div className="text-center py-12">
                <TrendingUp className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-700 mb-2">Analytics Dashboard</h3>
                <p className="text-dark-500 mb-6">Detailed analytics and reporting features coming soon</p>
                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold text-dark-700 mb-2">Revenue Trends</h4>
                    <p className="text-sm text-dark-500">Line graph showing monthly revenue growth</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold text-dark-700 mb-2">Plan Distribution</h4>
                    <p className="text-sm text-dark-500">Pie chart of Monthly vs Yearly plans</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold text-dark-700 mb-2">Shop Performance</h4>
                    <p className="text-sm text-dark-500">Bar graph of customers by shop location</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;