import React, { useState, useEffect } from 'react';
import Footer from '../../componenets/user/footer';
import NavbarWithMegaMenu from '../../componenets/user/navbar';
import useGet from '../../utils/useGet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

// Custom marker icon if needed
const barberIcon = new L.Icon({
  iconUrl: '/logo.png',
  iconSize: [25, 25],
  iconAnchor: [12, 25],
});

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [barbersPerPage] = useState(6);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState(null);
  const [minRating, setMinRating] = useState('');
  const [filters, setFilters] = useState({
    searchTerm: '',
    category: '',
    minRating: '',
    price: '',
  });

  // Fetch barbers based on the current filters
  const { data, loading } = useGet(
    `barbers?page=${currentPage}${
      filters.searchTerm ? `&name=${filters.searchTerm}` : ''
    }${filters.category ? `&type=${filters.category}` : ''}${
      filters.minRating ? `&rating=${filters.minRating}` : ''
    }`
  );

  // Function to handle applying filters
  const applyFilters = () => {
    setFilters({
      searchTerm: document.getElementById('name').value,
      category: document.getElementById('service').value,
      minRating: document.getElementById('rating').value,
    });
    setCurrentPage(1); // Reset to first page after applying filters
  };

  const totalPages = Math.ceil(data?.total / barbersPerPage); // Assuming your API returns total count of items

  // Helper function to safely parse location data
  const parseLocation = (location) => {
    try {
      const loc = JSON.parse(location);
      return [loc.latitude, loc.longitude];
    } catch (error) {
      return [null, null]; // Return null if parsing fails
    }
  };

  return (
    <>
      <NavbarWithMegaMenu />
      <div className="container mx-auto p-4">
        <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
          <div className="bg-white rounded-lg overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold">Filters</h2>
            </div>
            <div className="p-4 space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Barber Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Search by name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1FAE72] focus:border-[#1FAE72]"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                  Type
                </label>
                <select
                  id="service"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1FAE72] focus:border-[#1FAE72]"
                >
                  <option value="">Barber</option>
                  <option value="haircut">Spa</option>
                  <option value="shave">Massage</option>
                  <option value="styling">Nails</option>
                  <option value="coloring">Salon</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                  Gender
                </label>
                <select
                  id="gender"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1FAE72] focus:border-[#1FAE72]"
                >
                  <option value="">Male</option>
                  <option value="female">Female</option>
                  <option value="animal">Animals</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
                  Minimum Rating
                </label>
                <select
                  id="rating"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1FAE72] focus:border-[#1FAE72]"
                >
                  <option value="">Any rating</option>
                  <option value="4">4+ stars</option>
                  <option value="4.5">4.5+ stars</option>
                  <option value="5">5 stars</option>
                </select>
              </div>
              <button 
                onClick={applyFilters} 
                className="w-full bg-[#1FAE72] text-white py-2 px-4 rounded-md hover:bg-[#1C9D66] focus:outline-none focus:ring-2 focus:ring-[#1FAE72] focus:ring-offset-2"
              >
                Apply Filters
              </button>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold">Barbers on Map</h2>
              </div>
              <div className="p-4">
                <MapContainer center={[35.6892, -5.00028]} zoom={13} className="w-full h-96">
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                  />
                  {data?.data.map((barber) => {
                    const [latitude, longitude] = parseLocation(barber.location);
                    return latitude && longitude ? (
                      <Marker
                        key={barber.id}
                        position={[latitude, longitude]}
                        icon={barberIcon}
                      >
                        <Popup>
                          <Link to={`/salon/${barber.id}`} >
                            <h3 className="text-lg font-semibold">{barber.name}</h3>
                            <p>Rating: {barber.rating}</p>
                            <img src={barber.logo} alt={barber.name} className="w-full h-24 object-cover" />
                          </Link >
                        </Popup>
                      </Marker>
                    ) : null;
                  })}
                </MapContainer>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold">Barbers</h2>
              </div>
              <div className="p-4 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-10">
            {data?.data.map((barber, index) => (
              <Link to={`/salon/${barber.id}`} key={index}>
                <div className="max-w-sm rounded-lg transition-shadow duration-300 ease-in-out bg-white">
                  <img
                    className="w-full rounded-t-lg object-cover h-full"
                    src={barber.logo || "default-image.jpg"}
                    alt={barber.name}
                  />
                  <h3 className="text-gray-600 font-semibold">
                    {barber.user.city}, {barber.user.country}
                  </h3>
                  <div className="flex justify-between">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      {barber.name}
                    </h3>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-500 mr-1" />
                        <span className="text-gray-700">{barber.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
              </div>
              <div className="flex justify-between p-4">
                <button 
                  disabled={currentPage === 1} 
                  onClick={() => setCurrentPage(currentPage - 1)} 
                  className={`flex items-center mr-2 justify-center px-4 h-10 text-base font-medium text-gray-500 border border-gray-300 rounded-lg 
                    ${data?.current_page === 1 ? "bg-gray-200 cursor-not-allowed" : "bg-white hover:bg-gray-100 hover:text-gray-700"}`}                >
                  Previous
                </button>
                <button 
                  disabled={currentPage === totalPages} 
                  onClick={() => setCurrentPage(currentPage + 1)} 
                  className={`flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 border border-gray-300 rounded-lg 
                    ${data?.current_page === data?.last_page ? "bg-gray-200 cursor-not-allowed" : "bg-white hover:bg-gray-100 hover:text-gray-700"}`}                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
