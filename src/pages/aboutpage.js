import React from 'react';

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">About Us</h1>
          <p className="mt-4 text-xl text-center max-w-3xl mx-auto">
            Discover the story behind Showdown Quiz Informals and our mission to make learning fun
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Born during the COVID-19 pandemic as a WhatsApp group, Showdown Quiz Informals started as a way to keep friends connected and mentally engaged during lockdown. What began as casual quiz sessions among friends quickly grew into a vibrant community of knowledge enthusiasts.
            </p>
            <p className="text-gray-600">
              Today, we've evolved into a structured organization, hosting regular quiz events, workshops, and creating educational content for quiz enthusiasts of all levels.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600">
                To create an inclusive community where learning becomes an exciting journey. We strive to make knowledge sharing engaging, fun, and accessible to everyone through the art of quizzing.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-600">
                To become the leading platform for quiz enthusiasts, fostering a global community where knowledge sharing and learning go hand in hand with entertainment and engagement.
              </p>
            </div>
          </div>

          {/* Values */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Inclusivity</h3>
                <p className="text-gray-600">
                  We welcome everyone, regardless of their quiz experience or knowledge level.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Excellence</h3>
                <p className="text-gray-600">
                  We strive to maintain high standards in our quiz content and event organization.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Community</h3>
                <p className="text-gray-600">
                  We foster a supportive environment where learning from each other is celebrated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;