import React, { useState } from 'react';
import {
  CalendarIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
} from '@heroicons/react/24/solid';
import { Dog, Cat, Bird, PawPrint } from 'lucide-react';
import Carousel from '../../components/Carousel';
import FadeInOnScroll from '../../utilities/FadeInOnScroll';


const petIcons = {
  dog: Dog,
  cat: Cat,
  bird: Bird,
  other: PawPrint,
};

const breedOptions = {
  Dog: ['Labrador Retriever', 'German Shepherd', 'Golden Retriever', 'Beagle'],
  Cat: ['Persian', 'Siamese', 'Maine Coon', 'Bengal'],
  Bird: ['Parrot', 'Canary', 'Cockatiel', 'Finch'],
};

const doctors = [
  {
    id: 1,
    name: 'Dr. Ragini',
    image: 'src/images/ragini.jpg',
    specialty: 'Dog',
    breeds: ['Labrador Retriever', 'Beagle'],
  },
  {
    id: 2,
    name: 'Dr. Ramesh',
    image: 'src/images/ramesh.jpg',
    specialty: 'Cat',
    breeds: ['Persian', 'Siamese'],
  },
  {
    id: 3,
    name: 'Dr. Sangeeta',
    image: 'src/images/sangeeta.jpg',
    specialty: 'Bird',
    breeds: ['Parrot', 'Canary'],
  },
  {
    id: 4,
    name: 'Dr. Nisha',
    image: 'src/images/nisha.jpg',
    specialty: 'Dog',
    breeds: ['German Shepherd', 'Golden Retriever'],
  },
];

const VetAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [newAppointmentDate, setNewAppointmentDate] = useState('');
  const [newAppointmentTime, setNewAppointmentTime] = useState('');
  const [newPetType, setNewPetType] = useState('Dog');
  const [newBreed, setNewBreed] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleBookAppointment = (e) => {
    e.preventDefault();
    const newAppointment = {
      id: Date.now(),
      date: newAppointmentDate,
      time: newAppointmentTime,
      status: 'pending',
      petType: newPetType,
      breed: newBreed,
      doctor: selectedDoctor.name,
    };
    setAppointments([...appointments, newAppointment]);
    setNewAppointmentDate('');
    setNewAppointmentTime('');
    setNewPetType('Dog');
    setNewBreed('');
    setSelectedDoctor(null);
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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-8 flex items-center justify-center">
            <PawPrint className="w-12 h-12 mr-4 text-blue-600" />
            Veterinary Appointments
          </h1>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8 border-4 border-blue-200">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-xl leading-6 font-medium text-blue-900 mb-4 flex items-center">
                <CalendarIcon className="w-6 h-6 mr-2 text-blue-500" />
                Schedule Your Visit
              </h2>

              <Carousel>
                {doctors.map((doctor) => (
                  <div key={doctor.id} className="h-full relative z-0 py-4">
                    <div
                      className={`flex flex-col items-center p-4 border rounded-lg shadow-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-110 hover:z-10 h-full ${selectedDoctor && selectedDoctor.id === doctor.id
                          ? 'bg-blue-100 border-blue-500'
                          : 'hover:bg-blue-50'
                        }`}
                      onClick={() => setSelectedDoctor(doctor)}
                    >
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-24 h-24 rounded-full object-cover mb-4"
                      />
                      <h3 className="font-semibold text-blue-800 text-xl mb-2">{doctor.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">Specializing in {doctor.specialty}</p>
                      <ul className="text-xs text-gray-500">
                        <li>Breeds: {doctor.breeds.join(', ')}</li>
                      </ul>
                    </div>
                  </div>
                ))}
              </Carousel>

              {selectedDoctor && (
                <form onSubmit={handleBookAppointment} className="grid grid-cols-2 gap-4 max-w-2xl mx-auto p-4 mt-8">
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
                    className="col-span-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-lg mt-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    Book Appointment
                  </button>
                </form>
              )}
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
                    <li
                      key={appointment.id}
                      className="py-4 flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        {PetIcon && (
                          <PetIcon
                            className="h-6 w-6 text-blue-500 mr-3"
                            aria-hidden="true"
                          />
                        )}
                        <span className="text-sm font-medium text-gray-900">
                          {new Date(appointment.date).toLocaleDateString(
                            'en-US',
                            {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            }
                          )}{' '}
                          at {appointment.time} - {appointment.petType} (
                          {appointment.breed}) with {appointment.doctor}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${appointment.status === 'approved'
                              ? 'bg-green-100 text-green-800'
                              : appointment.status === 'denied'
                                ? 'bg-red-100 text-red-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}
                        >
                          {appointment.status.charAt(0).toUpperCase() +
                            appointment.status.slice(1)}
                        </span>
                        <div className="ml-2">
                          {getStatusIcon(appointment.status)}
                        </div>
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
};

export default VetAppointment;

