import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h1 className="text-4xl md:text-6xl font-bold text-center">
            Welcome to Showdown Quiz Informals
          </h1>
          <p className="mt-6 text-xl text-center max-w-3xl mx-auto">
            Join our vibrant community of quiz enthusiasts and embark on an exciting journey of knowledge discovery.
          </p>
          <div className="mt-10 flex justify-center space-x-4">
            <Link to="/events" className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100">
              Join Next Quiz
            </Link>
            <Link to="/about" className="border border-white text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700">
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Regular Quizzes</h3>
              <p className="text-gray-600">Join our weekly quiz events and challenge yourself with exciting questions across various categories.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Expert Quizmasters</h3>
              <p className="text-gray-600">Learn from experienced quiz creators and enthusiasts who craft engaging and educational questions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Growing Community</h3>
              <p className="text-gray-600">Be part of our inclusive community that started as a WhatsApp group and has grown into something amazing.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-blue-600 font-semibold mb-2">Saturday, Dec 2</div>
              <h3 className="text-xl font-semibold mb-2">General Knowledge Quiz</h3>
              <p className="text-gray-600 mb-4">Test your knowledge across various topics in this exciting weekly quiz.</p>
              <Link to="/events" className="text-blue-600 font-medium hover:text-blue-700">
                Register Now →
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-blue-600 font-semibold mb-2">Sunday, Dec 3</div>
              <h3 className="text-xl font-semibold mb-2">Movie Buffs Special</h3>
              <p className="text-gray-600 mb-4">A special quiz dedicated to cinema lovers and movie enthusiasts.</p>
              <Link to="/events" className="text-blue-600 font-medium hover:text-blue-700">
                Register Now →
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-blue-600 font-semibold mb-2">Wednesday, Dec 6</div>
              <h3 className="text-xl font-semibold mb-2">Science & Tech Quiz</h3>
              <p className="text-gray-600 mb-4">Explore the fascinating world of science and technology.</p>
              <Link to="/events" className="text-blue-600 font-medium hover:text-blue-700">
                Register Now →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Members Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-4">"The quizzes are incredibly engaging and I've learned so much. The community is supportive and friendly!"</p>
              <div className="font-semibold">- Sarah J.</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-4">"Best quiz community I've been part of. The questions are challenging yet fun, and the hosts are amazing!"</p>
              <div className="font-semibold">- Mike R.</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h2>
          <p className="text-xl mb-8">Start your quiz journey today and connect with fellow enthusiasts!</p>
          <Link to="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;