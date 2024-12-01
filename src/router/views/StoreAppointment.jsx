import React, { useState } from 'react';
import { CalendarIcon, CheckCircleIcon, XCircleIcon, ClockIcon } from '@heroicons/react/24/solid';
import { PawPrint, Dog, Cat, Bird } from 'lucide-react';
import FadeInOnScroll from '../../utilities/FadeInOnScroll';

const petIcons = {
  dog: Dog,
  cat: Cat,
  bird: Bird,
  other: PawPrint,
};

// Breed options for each pet type
const breedOptions = {
  Dog: ['Labrador Retriever', 'German Shepherd', 'Golden Retriever', 'Beagle'],
  Cat: ['Persian', 'Siamese', 'Maine Coon', 'Bengal'],
  Bird: ['Parrot', 'Canary', 'Cockatiel', 'Finch'],
};

export default function PetStoreBookingPage() {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      date: '2023-06-01',
      time: '10:00 AM',
      status: 'approved',
      petType: 'Dog',
      breed: 'Labrador Retriever',
    },
    {
      id: 2,
      date: '2023-06-15',
      time: '2:00 PM',
      status: 'denied',
      petType: 'Cat',
      breed: 'Persian',
    },
    {
      id: 3,
      date: '2023-06-30',
      time: '11:30 AM',
      status: 'pending',
      petType: 'Bird',
      breed: 'Parrot',
    },
  ]);
  const [newAppointmentDate, setNewAppointmentDate] = useState('');
  const [newAppointmentTime, setNewAppointmentTime] = useState('');
  const [newPetType, setNewPetType] = useState('Dog');
  const [newBreed, setNewBreed] = useState('');

  const handleBookAppointment = (e) => {
    e.preventDefault();
    const newAppointment = {
      id: Date.now(),
      date: newAppointmentDate,
      time: newAppointmentTime,
      status: 'pending',
      petType: newPetType,
      breed: newBreed,
    };
    setAppointments([...appointments, newAppointment]);
    setNewAppointmentDate('');
    setNewAppointmentTime('');
    setNewPetType('Dog');
    setNewBreed('');
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'approved':
        return <CheckCircleIcon className="w-6 h-6 text-green-500" />;
      case 'denied':
        return <XCircleIcon className="w-6 h-6 text-red-500" />;
      default:
        return <ClockIcon className="w-6 h-6 text-yellow-500" />;
    }
  };

  return (
    <FadeInOnScroll>
      <div className="min-h-screen bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-8 flex items-center justify-center">
            <PawPrint className="w-12 h-12 mr-4 text-blue-600" />
            TailScape Pet Store Visits
          </h1>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8 border-4 border-blue-200">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-xl leading-6 font-medium text-blue-900 mb-4 flex items-center">
                <CalendarIcon className="w-6 h-6 mr-2 text-blue-500" />
                Schedule Your Visit
              </h2>
              <form
                onSubmit={handleBookAppointment}
                className="grid grid-cols-2 gap-4 max-w-2xl mx-auto p-4"
              >
                <div className="relative">
                  <input
                    type="date"
                    value={newAppointmentDate}
                    onChange={(e) => setNewAppointmentDate(e.target.value)}
                    className="peer w-full h-full px-3 py-2 text-sm border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  <label className="absolute left-3 -top-2.5 bg-white px-1 text-xs text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-blue-500">
                    Date
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="time"
                    value={newAppointmentTime}
                    onChange={(e) => setNewAppointmentTime(e.target.value)}
                    className="peer w-full h-full px-3 py-2 text-sm border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  <label className="absolute left-3 -top-2.5 bg-white px-1 text-xs text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-blue-500">
                    Time
                  </label>
                </div>

                <div className="relative">
                  <select
                    value={newPetType}
                    onChange={(e) => {
                      setNewPetType(e.target.value);
                      setNewBreed('');
                    }}
                    className="peer w-full h-full px-3 py-2 text-sm border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                    required
                  >
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                    <option value="Bird">Bird</option>
                    <option value="Other">Other</option>
                  </select>
                  <label className="absolute left-3 -top-2.5 bg-white px-1 text-xs text-gray-600 transition-all peer-focus:text-blue-500">
                    Pet Type
                  </label>
                </div>

                <div className="relative">
                  {newPetType === 'Other' ? (
                    <input
                      type="text"
                      value={newBreed}
                      onChange={(e) => setNewBreed(e.target.value)}
                      className="peer w-full h-full px-3 py-2 text-sm border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Specify Breed"
                      required
                    />
                  ) : (
                    <select
                      value={newBreed}
                      onChange={(e) => setNewBreed(e.target.value)}
                      className="peer w-full h-full px-3 py-2 text-sm border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                      required
                    >
                      <option value="">Select Breed</option>
                      {breedOptions[newPetType]?.map((breed) => (
                        <option key={breed} value={breed}>
                          {breed}
                        </option>
                      ))}
                    </select>
                  )}
                  <label className="absolute left-3 -top-2.5 bg-white px-1 text-xs text-gray-600 transition-all peer-focus:text-blue-500">
                    {newPetType === 'Other' ? 'Breed (Specify)' : 'Breed'}
                  </label>
                </div>
                <button
                  type="submit"
                  className="col-span-2 w-full py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  Book Your Visit
                </button>
              </form>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden border-4 border-blue-200">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-xl leading-6 font-medium text-blue-900 mb-4 flex items-center">
                <ClockIcon className="w-6 h-6 mr-2 text-blue-500" />
                Your Upcoming Visits
              </h2>
              <ul className="divide-y divide-gray-200">
                {appointments.map((appointment) => {
                  const PetIcon = petIcons[appointment.petType.toLowerCase()];
                  return (
                    <li key={appointment.id} className="py-4 flex items-center justify-between">
                      <div className="flex items-center">
                        {PetIcon && (
                          <PetIcon className="h-6 w-6 text-blue-500 mr-3" aria-hidden="true" />
                        )}
                        <span className="text-sm font-medium text-gray-900">
                          {new Date(appointment.date).toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}{' '}
                          at {appointment.time} - {appointment.petType} ({appointment.breed})
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            appointment.status === 'approved'
                              ? 'bg-green-100 text-green-800'
                              : appointment.status === 'denied'
                                ? 'bg-red-100 text-red-800'
                                : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                        </span>
                        <div className="ml-2">{getStatusIcon(appointment.status)}</div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </FadeInOnScroll>
  );
}
