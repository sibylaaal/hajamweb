import React, { useState, useEffect } from 'react';
import { FaHeart, FaRegHeart, FaTrash } from 'react-icons/fa';
import ClipLoader from 'react-spinners/ClipLoader';
import { Link } from 'react-router-dom';
import NavbarWithMegaMenu from '../../componenets/user/navbar';
import Footer from '../../componenets/user/footer';
import { IoMdArrowBack } from 'react-icons/io';
import { motion } from "framer-motion";
import { Scissors } from "lucide-react";
const initialData = [
  {
    id: 1,
    type: 'barber',
    gender: 'male',
    city: 'new-york',
    name: 'Supa Cozy Barber',
    reviews: '4.5/5 - 100 reviews',
    price: 1048,
    image: 'https://ncd.eanocookie.com/image/eap/eaimages/blog_gallery/salon-de-coiffure_03f1005d10.jpg',
    position: [40.7128, -74.0060],
  },
  {
    id: 2,
    type: 'salon',
    gender: 'female',
    city: 'los-angeles',
    name: 'Luxury Salon',
    reviews: '4.8/5 - 200 reviews',
    price: 2099,
    image: 'https://ncd.eanocookie.com/image/eap/eaimages/blog_gallery/salon-de-coiffure_03f1005d10.jpg',
    position: [34.0522, -118.2437],
  },
  {
    id: 3,
    type: 'barber',
    gender: 'male',
    city: 'chicago',
    name: 'Modern Barber Shop',
    reviews: '4.2/5 - 150 reviews',
    price: 899,
    image: 'https://ncd.eanocookie.com/image/eap/eaimages/blog_gallery/salon-de-coiffure_03f1005d10.jpg',
    position: [41.8781, -87.6298],
  },
  // Add more dummy data as needed
];

export default function Myfav() {
  const [favorites, setFavorites] = useState(initialData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleRemoveFavorite = (id) => {
    setFavorites(favorites.filter(item => item.id !== id));
  };

  return (
    <>
      <NavbarWithMegaMenu />
      {loading ? (
        <div className="flex flex-col items-center justify-center h-screen bg-white">
        <div className="mb-8">
          <motion.div
            animate={{ rotateZ: [0, 20, 0, -20, 0] }}
            transition={{ duration: 1, ease: "easeInOut", repeat: Infinity }}
          >
            <Scissors className="w-24 h-24 text-primary" />
          </motion.div>
        </div>
      </div>
      ) : (
        <>
        <div className='flex'>
          


          <div className="max-w-5xl pl-20 px-4 pt-6">
                <div className="flex items-center justify-between">
                   <Link to={'/'}> <IoMdArrowBack size={24} className="cursor-pointer"  /></Link>
                </div>

<h1 className="text-[2.5rem] mt-5  font-bold leading-[3rem] tracking-tight text-black">
            My Favorites
          </h1>

          
          </div>
          </div>
          <div className="p-4 lg:p-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {favorites.map((item) => (
                <div key={item.id} className=" bg-white rounded-lg ">
                  <img
                    src={item.image}
                    alt={item.name}
                    className=" object-cover"
                  />
                  <div className=" p-4 flex flex justify-between">
                    <div>
                      <h2 className="text-xl font-bold">{item.name}</h2>
                      <p className="text-gray-600">{item.reviews}</p>
                      <span className="text-lg font-bold text-[#1FAE72]">${item.price}</span>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                    
                      <button onClick={() => handleRemoveFavorite(item.id)} className="text-gray-500 hover:text-red-500">
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      <Footer />
    </>
  );
}
