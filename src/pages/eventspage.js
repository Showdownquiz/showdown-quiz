import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EventsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const upcomingEvents = [
    {
      id: 1,
      title: "Weekend General Knowledge Quiz",
      date: "December 2, 2024",
      time: "7:00 PM IST",
      category: "general",
      description: "Test your knowledge across various topics in our weekly quiz event.",
      price: "Free",
      slots: "50/100",
      difficulty: "Medium"
    },
    {
      id: 2,
      title: "Movie Buffs Special",
      date: "December 3, 2024",
      time: "8:00 PM IST",
      category: "special",
      description: "A special quiz dedicated to cinema lovers and movie enthusiasts.",
      price: "₹99",
      slots: "30/50",
      difficulty: "Easy"
    },
    {
      id: 3,
      title: "Science & Tech Quiz",
      date: "December 6, 2024",
      time: "7:30 PM IST",
      category: "themed",
      description: "Explore the fascinating world of science and technology.",
      price: "Free",
      slots: "75/100",
      difficulty: "Hard"
    }
  ];

  const pastEvents = [
    {
      id: 101,
      title: "Sports Championship Quiz",
      date: "November 25, 2024",
      participants: 85,
      winner: "Team Quizzards"
    },
    {
      id: 102,
      title: "History Special",
      date: "November 18, 2024",
      participants: 92,
      winner: "Team Chronicles"
    }
  ];

  const filteredEvents = selectedCategory === 'all' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.category === selectedCategory);

  const handleRegisterClick = (event) => {
    setSelectedEvent(event);
    setShowRegistrationModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Quiz Events</h1>
          <p className="mt-4 text-xl text-center max-w-3xl mx-auto">
            Join our exciting quiz events and challenge yourself
          </p>
        </div>
      </div>

      {/* Events Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Category Filter */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => setSelectedCategory('all')}
                className={
                  selectedCategory === 'all'
                    ? "px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-l-lg"
                    : "px-4 py-2 text-sm font-medium bg-white text-gray-700 hover:bg-gray-50 rounded-l-lg"
                }
              >
                All Events
              </button>
              <button
                onClick={() => setSelectedCategory('general')}
                className={
                  selectedCategory === 'general'
                    ? "px-4 py-2 text-sm font-medium bg-blue-600 text-white"
                    : "px-4 py-2 text-sm font-medium bg-white text-gray-700 hover:bg-gray-50"
                }
              >
                General
              </button>
              <button
                onClick={() => setSelectedCategory('special')}
                className={
                  selectedCategory === 'special'
                    ? "px-4 py-2 text-sm font-medium bg-blue-600 text-white"
                    : "px-4 py-2 text-sm font-medium bg-white text-gray-700 hover:bg-gray-50"
                }
              >
                Special
              </button>
              <button
                onClick={() => setSelectedCategory('themed')}
                className={
                  selectedCategory === 'themed'
                    ? "px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-r-lg"
                    : "px-4 py-2 text-sm font-medium bg-white text-gray-700 hover:bg-gray-50 rounded-r-lg"
                }
              >
                Themed
              </button>
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map(event => (
              <div key={event.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">{event.title}</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {event.difficulty}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 space-y-2 mb-4">
                    <div>{event.date} at {event.time}</div>
                    <div>Price: {event.price}</div>
                    <div>Available Slots: {event.slots}</div>
                  </div>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <button 
                    onClick={() => handleRegisterClick(event)}
                    className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
                  >
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Past Events Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Past Events</h2>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Event
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Participants
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Winner
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {pastEvents.map(event => (
                    <tr key={event.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {event.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {event.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {event.participants}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {event.winner}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Modal */}
      {showRegistrationModal && selectedEvent && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
                Register for {selectedEvent.title}
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input type="tel" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2" />
                </div>
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowRegistrationModal(false)}
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsPage;