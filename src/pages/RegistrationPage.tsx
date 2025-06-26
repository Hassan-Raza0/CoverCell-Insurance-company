import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Upload, Camera, Shield, ArrowRight, MapPin, Check } from 'lucide-react';

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  brand: string;
  phoneModel: string;
  serialNumber: string;
  imei: string;
  plan: 'monthly' | 'yearly';
  agreeToTerms: boolean;
}

const RegistrationPage = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
  const [uploadedFiles, setUploadedFiles] = useState({
    front: null as File | null,
    back: null as File | null
  });
  const [showThankYou, setShowThankYou] = useState(false);

  const selectedPlan = watch('plan', 'monthly');

  const handleFileUpload = (type: 'front' | 'back', file: File) => {
    setUploadedFiles(prev => ({
      ...prev,
      [type]: file
    }));
  };

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', { ...data, uploadedFiles });
    setShowThankYou(true);
  };

  if (showThankYou) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
        <div className="max-w-md mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-dark-700 mb-4">Registration Successful!</h1>
            <p className="text-dark-500 mb-6">
              Thank you for registering with CoverCell. Your phone is now protected! 
              You'll receive a confirmation email shortly.
            </p>
            <button
              onClick={() => setShowThankYou(false)}
              className="w-full bg-primary-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
            >
              Register Another Phone
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Shield className="h-16 w-16 text-primary-500 mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold text-dark-700 mb-4">
            Register Your Phone
          </h1>
          <p className="text-xl text-dark-500 max-w-2xl mx-auto">
            Get comprehensive protection for your device in just a few minutes
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Personal Information */}
            <div>
              <h2 className="text-2xl font-bold text-dark-700 mb-6 flex items-center">
                <div className="bg-primary-100 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary-600 font-bold text-sm">1</span>
                </div>
                Personal Information
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    {...register('fullName', { required: 'Full name is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    {...register('phone', { required: 'Phone number is required' })}
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">
                    Physical Address *
                  </label>
                  <div className="relative">
                    <input
                      {...register('address', { required: 'Address is required' })}
                      className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Enter your address"
                    />
                    <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </div>
                  {errors.address && (
                    <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Phone Details */}
            <div>
              <h2 className="text-2xl font-bold text-dark-700 mb-6 flex items-center">
                <div className="bg-primary-100 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary-600 font-bold text-sm">2</span>
                </div>
                Phone Details
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">
                    Brand *
                  </label>
                  <select
                    {...register('brand', { required: 'Brand is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    <option value="">Select Brand</option>
                    <option value="Apple">Apple</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Google">Google</option>
                    <option value="OnePlus">OnePlus</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.brand && (
                    <p className="mt-1 text-sm text-red-600">{errors.brand.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">
                    Model *
                  </label>
                  <input
                    {...register('phoneModel', { required: 'Phone model is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="e.g., iPhone 15 Pro"
                  />
                  {errors.phoneModel && (
                    <p className="mt-1 text-sm text-red-600">{errors.phoneModel.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">
                    Serial Number *
                  </label>
                  <input
                    {...register('serialNumber', { required: 'Serial number is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Enter serial number"
                  />
                  {errors.serialNumber && (
                    <p className="mt-1 text-sm text-red-600">{errors.serialNumber.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">
                    IMEI Number *
                  </label>
                  <input
                    {...register('imei', { required: 'IMEI number is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Enter IMEI number"
                  />
                  {errors.imei && (
                    <p className="mt-1 text-sm text-red-600">{errors.imei.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Photo Upload */}
            <div>
              <h2 className="text-2xl font-bold text-dark-700 mb-6 flex items-center">
                <div className="bg-primary-100 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary-600 font-bold text-sm">3</span>
                </div>
                Upload Phone Photos
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">
                    Front Photo *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary-400 transition-colors">
                    <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-sm text-gray-600 mb-2">
                      {uploadedFiles.front ? uploadedFiles.front.name : 'Upload front photo of your phone'}
                    </p>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => e.target.files && handleFileUpload('front', e.target.files[0])}
                      className="hidden"
                      id="front-upload"
                    />
                    <label
                      htmlFor="front-upload"
                      className="inline-flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 cursor-pointer transition-colors"
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      Choose File
                    </label>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">
                    Back Photo *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary-400 transition-colors">
                    <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-sm text-gray-600 mb-2">
                      {uploadedFiles.back ? uploadedFiles.back.name : 'Upload back photo of your phone'}
                    </p>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => e.target.files && handleFileUpload('back', e.target.files[0])}
                      className="hidden"
                      id="back-upload"
                    />
                    <label
                      htmlFor="back-upload"
                      className="inline-flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 cursor-pointer transition-colors"
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      Choose File
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Plan Selection */}
            <div>
              <h2 className="text-2xl font-bold text-dark-700 mb-6 flex items-center">
                <div className="bg-primary-100 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary-600 font-bold text-sm">4</span>
                </div>
                Select Your Plan
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <label className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                  selectedPlan === 'monthly' 
                    ? 'border-primary-500 bg-primary-50' 
                    : 'border-gray-300 hover:border-primary-300'
                }`}>
                  <input
                    {...register('plan')}
                    type="radio"
                    value="monthly"
                    className="sr-only"
                  />
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-dark-700 mb-2">Monthly Plan</h3>
                    <div className="text-3xl font-bold text-primary-600 mb-2">$12.99</div>
                    <p className="text-sm text-dark-500 mb-4">Flexible monthly coverage</p>
                    <ul className="text-left text-sm space-y-1">
                      <li>• Accident protection</li>
                      <li>• Theft coverage</li>
                      <li>• Liquid damage</li>
                      <li>• 24/7 support</li>
                    </ul>
                  </div>
                </label>
                
                <label className={`border-2 rounded-lg p-6 cursor-pointer transition-all relative ${
                  selectedPlan === 'yearly' 
                    ? 'border-primary-500 bg-primary-50' 
                    : 'border-gray-300 hover:border-primary-300'
                }`}>
                  <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Save $30
                  </div>
                  <input
                    {...register('plan')}
                    type="radio"
                    value="yearly"
                    className="sr-only"
                  />
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-dark-700 mb-2">Yearly Plan</h3>
                    <div className="text-3xl font-bold text-primary-600 mb-2">$125</div>
                    <p className="text-sm text-dark-500 mb-4">Best value protection</p>
                    <ul className="text-left text-sm space-y-1">
                      <li>• Everything in Monthly</li>
                      <li>• Priority support</li>
                      <li>• Free health check</li>
                      <li>• Extended warranty</li>
                    </ul>
                  </div>
                </label>
              </div>
            </div>

            {/* Agreement */}
            <div className="flex items-start">
              <input
                {...register('agreeToTerms', { required: 'You must agree to the terms' })}
                type="checkbox"
                className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label className="ml-3 text-sm text-dark-600">
  I agree to the <a href="/terms" className="text-primary-600 hover:text-primary-700 underline">Terms & Conditions</a> and <a href="/privacy" className="text-primary-600 hover:text-primary-700 underline">Privacy Policy</a>
</label>

            </div>
            {errors.agreeToTerms && (
              <p className="text-sm text-red-600">{errors.agreeToTerms.message}</p>
            )}

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-primary-500 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-primary-600 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center"
              >
                Complete Registration
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;