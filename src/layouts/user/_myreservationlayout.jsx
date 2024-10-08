import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaInfoCircle  } from 'react-icons/fa';

import NavbarWithMegaMenu from '../../componenets/user/navbar';
import Footer from '../../componenets/user/footer';

const reservations = [
  {
    id: 1,
    title: 'Interview Meeting',
    date: '11 Feb 2020',
    time: '10:30 am',
    duration: '2 Hrs',
    location: 'Chowmohalla Palace',
    address: 'EDL Tech Park / Wipro / Floor / Zone /',
    recurring: true,
  },
  {
    id: 2,
    title: 'Design Sprint Meeting',
    date: '11 Feb 2020',
    time: '10:30 am',
    duration: '2 Hrs',
    location: 'Dragonstone',
    address: 'EDL Tech Park / Wipro / Floor / Zone /',
    recurring: false,
  },
  {
    id: 3,
    title: 'Team Meeting',
    date: '11 Feb 2020',
    time: '10:30 am',
    duration: '2 Hrs',
    location: 'Dragonstone',
    address: 'EDL Tech Park / Wipro / Floor / Zone /',
    recurring: true,
  },
];

export default function MyReservations() {
  const [activeTab, setActiveTab] = useState('Upcoming');

  return (
    <>
      <NavbarWithMegaMenu />
      <div className="p-4 lg:p-20 bg-white">
        <div className="flex justify-around bg-gray-200 rounded-lg mb-6">
          <button
            className={`py-3 m-2  px-4 text-lg font-semibold ${activeTab === 'Upcoming' ? 'bg-[#1FAE72] text-white rounded-lg' : 'text-gray-600'}`}
            onClick={() => setActiveTab('Upcoming')}
          >
            Upcoming
          </button>
          
          <button
            className={`py-3 m-2  px-4 text-lg font-semibold ${activeTab === 'Completed' ? 'bg-[#1FAE72] text-white rounded-lg' : 'text-gray-600'}`}
            onClick={() => setActiveTab('Completed')}
          >
            Completed
          </button>
          <button
            className={`py-3 m-2  px-4 text-lg font-semibold ${activeTab === 'Cancelled' ? 'bg-[#1FAE72] text-white rounded-lg' : 'text-gray-600'}`}
            onClick={() => setActiveTab('Cancelled')}
          >
            Cancelled
          </button>
        </div>

        <p className="text-gray-500 mb-4">Feb 11, 2020</p>

        {reservations.map((reservation) => (
          <div key={reservation.id} className="bg-gray-100 p-4 rounded-lg mb-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold text-gray-800">{reservation.title}</h2>
              {reservation.recurring && <FaInfoCircle  className="text-gray-600" />}
            </div>
            <p className="text-gray-500 mb-2">{`${reservation.date} | ${reservation.time} | ${reservation.duration}`}</p>
            <p className="text-gray-800 text-sm mb-1">{reservation.location}</p>
            <p className="text-gray-500 text-sm mb-4">{reservation.address}</p>
            <Link to="/map" className="flex items-center text-[#1FAE72] hover:text-teal-800">
              <span className="mr-2">View Map</span>
              <FaMapMarkerAlt />
            </Link>
          </div>
        ))}
      </div>
      <Footer/>
    </>
  );
}
