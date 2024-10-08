import React from 'react';
import NavbarWithMegaMenu from '../../componenets/user/navbar';
import Footer from '../../componenets/user/footer';
import { Link } from 'react-router-dom';


export default function News() {
  
  const newsItems = [
    {
      date: '10th Oct 2022',
      title: 'How to position your furniture for positivity',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem.',
      mapUrl: 'https://c1.wallpaperflare.com/preview/217/997/83/morocco-ait-ben-haddou-wilderness-city.jpg' // Placeholder for the map URL
    },
    {
      date: '12th Oct 2022',
      title: 'The best practices for home office setup',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem.',
      mapUrl: 'https://c1.wallpaperflare.com/preview/217/997/83/morocco-ait-ben-haddou-wilderness-city.jpg' // Placeholder for the map URL
    },
    // Add more news items as needed
  ];

  return (
    <>



      <NavbarWithMegaMenu />

      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-4xl font-bold text-center mb-12 text-gray-800">
          Last News
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {newsItems.map((item, index) => (
            <Link to={'/news/1'}
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105"
            >
              <img
                alt={`Map for ${item.title}`}
                src={item.mapUrl}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="relative bg-gradient-to-t from-gray-900/70 to-gray-900/30 p-6 sm:p-8">
                <time datetime="2022-10-10" className="block text-xs text-gray-300 mb-2">
                  {item.date}
                </time>
                <a href="#" className="block">
                  <h3 className="text-2xl font-semibold text-white mb-3">{item.title}</h3>
                </a>
                <p className="text-base text-white/90 line-clamp-4">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center py-5">
            <a
              href="#"
              className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
            >
              Previous
            </a>
            <a
              href="#"
              className="flex items-center justify-center px-4 h-10 ms-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
            >
              Next
            </a>
          </div>
      </div>

      <Footer />
    </>
  );
}
