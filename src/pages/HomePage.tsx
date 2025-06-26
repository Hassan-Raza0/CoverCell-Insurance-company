import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, Smartphone, FileText, CreditCard, ArrowRight, Phone, Mail, MapPin, Star, Users, Clock, Lock, Headphones } from 'lucide-react';

const HomePage = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "CoverCell saved me $800 when I dropped my iPhone. The claim process was incredibly smooth and fast!",
      location: "New York, NY"
    },
    {
      name: "Mike Chen",
      rating: 5,
      comment: "Best phone insurance I've ever had. Monthly payments are affordable and the coverage is comprehensive.",
      location: "Los Angeles, CA"
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      comment: "Their customer service is outstanding. Got my replacement phone within 24 hours of filing a claim.",
      location: "Chicago, IL"
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "Instant Coverage",
      description: "Get protected immediately after registration. No waiting periods or delays."
    },
    {
      icon: Smartphone,
      title: "Easy Management",
      description: "Manage your policy, file claims, and track status through our user-friendly dashboard."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Our dedicated support team is available around the clock to assist you."
    },
    {
      icon: Lock,
      title: "Secure Payments",
      description: "Your payment information is protected with bank-level security encryption."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-dark-700 via-dark-600 to-dark-500 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-primary-500/20 p-6 rounded-full">
                <Shield className="h-20 w-20 text-primary-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Protect Your Phone with
              <span className="text-primary-400 block">CoverCell</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Affordable monthly and yearly plans that cover accidents, theft, and damage. 
              Get peace of mind with comprehensive protection for your device.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="inline-flex items-center px-8 py-4 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Register Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="#pricing"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-dark-700 transition-all duration-200"
              >
                View Plans
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-700 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-dark-500 max-w-2xl mx-auto">
              Getting protected is simple and takes just a few minutes
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center relative">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <Smartphone className="h-8 w-8 text-primary-600" />
                <span className="absolute -top-2 -right-2 bg-primary-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-dark-700 mb-4">Register Phone Details</h3>
              <p className="text-dark-500">
                Provide your phone information including model, serial number, and IMEI.
              </p>
            </div>

            <div className="text-center relative">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <FileText className="h-8 w-8 text-primary-600" />
                <span className="absolute -top-2 -right-2 bg-primary-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-dark-700 mb-4">Choose a Plan</h3>
              <p className="text-dark-500">
                Select between our flexible monthly or cost-effective yearly protection plans.
              </p>
            </div>

            <div className="text-center relative">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <CreditCard className="h-8 w-8 text-primary-600" />
                <span className="absolute -top-2 -right-2 bg-primary-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-dark-700 mb-4">Upload Photos</h3>
              <p className="text-dark-500">
                Take clear photos of your phone's front and back for verification.
              </p>
            </div>

            <div className="text-center relative">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <Shield className="h-8 w-8 text-primary-600" />
                <span className="absolute -top-2 -right-2 bg-primary-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold text-dark-700 mb-4">Get Covered</h3>
              <p className="text-dark-500">
                Your phone is now protected! Manage everything through your dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-700 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-dark-500 max-w-2xl mx-auto">
              Choose the plan that works best for you. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Monthly Plan */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-dark-700 mb-2">Monthly Plan</h3>
                <div className="text-4xl font-bold text-primary-600 mb-4">
                  $12.99<span className="text-lg text-dark-500">/month</span>
                </div>
                <p className="text-dark-500 mb-6">Perfect for flexible coverage</p>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Accident protection up to $1,000</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Theft coverage nationwide</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Liquid damage protection</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>24/7 customer support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Fast claim processing</span>
                  </li>
                </ul>
                <Link
                  to="/register"
                  className="w-full bg-gray-100 text-dark-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200 block text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Yearly Plan */}
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-transform duration-300 relative">
              <div className="absolute top-4 right-4 bg-white text-primary-600 px-3 py-1 rounded-full text-sm font-semibold">
                Save $30
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Yearly Plan</h3>
                <div className="text-4xl font-bold mb-4">
                  $125<span className="text-lg opacity-80">/year</span>
                </div>
                <p className="opacity-90 mb-6">Best value for long-term protection</p>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                    <span>Everything in Monthly Plan</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                    <span>Priority customer support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                    <span>Free annual phone health check</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                    <span>Extended warranty coverage</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                    <span>No deductible on first claim</span>
                  </li>
                </ul>
                <Link
                  to="/register"
                  className="w-full bg-white text-primary-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 block text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-700 mb-4">
              Why Choose CoverCell?
            </h2>
            <p className="text-xl text-dark-500 max-w-2xl mx-auto">
              We're committed to providing the best phone insurance experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-dark-700 mb-4">{feature.title}</h3>
                <p className="text-dark-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-700 mb-4">
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center mb-6">
              <Users className="h-6 w-6 text-primary-500 mr-2" />
              <span className="text-lg font-semibold text-dark-600">Trusted by 1,000+ customers</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-dark-600 mb-4 italic">"{testimonial.comment}"</p>
                <div>
                  <p className="font-semibold text-dark-700">{testimonial.name}</p>
                  <p className="text-sm text-dark-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-dark-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About CoverCell</h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Founded in 2020, CoverCell has been at the forefront of mobile device protection, 
                providing comprehensive insurance solutions that give our customers peace of mind.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Our mission is to make phone insurance simple, affordable, and accessible to everyone. 
                We believe that protecting your most important device shouldn't be complicated or expensive.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-primary-400 mr-4" />
                  <div>
                    <p className="font-semibold">24/7 Support</p>
                    <p className="text-gray-300">1-800-COVERCELL</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-primary-400 mr-4" />
                  <div>
                    <p className="font-semibold">Email Support</p>
                    <p className="text-gray-300">support@covercell.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-primary-400 mr-4" />
                  <div>
                    <p className="font-semibold">Headquarters</p>
                    <p className="text-gray-300">123 Insurance Ave, Protection City, PC 12345</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-dark-600 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-dark-500 text-white rounded-lg border border-dark-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-dark-500 text-white rounded-lg border border-dark-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-dark-500 text-white rounded-lg border border-dark-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-600 transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-8 w-8 text-primary-400" />
                <span className="text-xl font-bold">CoverCell</span>
              </div>
              <p className="text-gray-400 mb-4">
                Protecting your mobile devices with comprehensive insurance coverage you can trust.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/register" className="text-gray-400 hover:text-white transition-colors">Register</Link></li>
                <li><Link to="/portal" className="text-gray-400 hover:text-white transition-colors">Customer Portal</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link></li>
                <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>1-800-COVERCELL</li>
                <li>support@covercell.com</li>
              </ul>
            </div>
          </div>
          
          <hr className="border-gray-700 my-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 CoverCell. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;