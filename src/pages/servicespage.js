import React from 'react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Our Services</h1>
          <p className="mt-4 text-xl text-center max-w-3xl mx-auto">
            From quiz organization to educational content, we offer a range of services to engage and educate
          </p>
        </div>
      </div>

      {/* Main Services */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Quiz Events */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Quiz Events</h3>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Weekly General Knowledge Quizzes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Themed Special Events</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Corporate Quiz Programs</span>
                </li>
              </ul>
              <Link to="/events" className="text-blue-600 hover:text-blue-700 font-medium">
                View Upcoming Events →
              </Link>
            </div>

            {/* Educational Content */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Educational Content</h3>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Quiz Preparation Guides</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Topic-wise Study Material</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Practice Question Banks</span>
                </li>
              </ul>
              <Link to="/blog" className="text-blue-600 hover:text-blue-700 font-medium">
                Access Resources →
              </Link>
            </div>
          </div>

          {/* Additional Services */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-center mb-8">Additional Offerings</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Custom Quiz Design</h3>
                <p className="text-gray-600">
                  Tailor-made quizzes for schools, colleges, and corporate events
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Workshop & Training</h3>
                <p className="text-gray-600">
                  Learn quiz-making techniques and question crafting
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Online Learning</h3>
                <p className="text-gray-600">
                  Digital resources and interactive learning materials
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Simple Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Tier */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Basic Access</h3>
              <div className="text-4xl font-bold mb-4">Free</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Join Weekly Quizzes</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Basic Study Materials</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Community Access</span>
                </li>
              </ul>
              <Link to="/contact" className="block text-center bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                Get Started
              </Link>
            </div>

            {/* Premium Tier */}
            <div className="bg-blue-600 text-white p-8 rounded-lg shadow-lg transform scale-105">
              <h3 className="text-xl font-bold mb-4">Premium</h3>
              <div className="text-4xl font-bold mb-4">₹499/mo</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>All Basic Features</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>Premium Study Materials</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>1-on-1 Mentoring</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  <span>Special Events Access</span>
                </li>
              </ul>
              <Link to="/contact" className="block text-center bg-white text-blue-600 px-6 py-2 rounded-md hover:bg-gray-100">
                Subscribe Now
              </Link>
            </div>

            {/* Enterprise Tier */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Enterprise</h3>
              <div className="text-4xl font-bold mb-4">Custom</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Custom Quiz Events</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Branded Materials</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Dedicated Support</span>
                </li>
              </ul>
              <Link to="/contact" className="block text-center bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community today and start your journey towards becoming a quiz champion!
          </p>
          <Link to="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;