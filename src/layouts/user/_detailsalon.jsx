import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import Modal from "react-modal";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { Scissors } from "lucide-react";
import useGet from "../../utils/useGet";
import NavbarWithMegaMenu from "../../componenets/user/navbar"; // Adjust path as necessary
import Footer from "../../componenets/user/footer"; // Adjust path as necessary

Modal.setAppElement("#root");

function Barber() {
    const { id } = useParams();
    const { data, loading, error } = useGet(`barber/${id}`);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState('');
    const [selectedCosmetique, setSelectedCosmetique] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [errorDate, setErrorDate] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleConfirmDate = (date) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (new Date(date) < today) {
            setErrorDate(true);
        } else {
            setErrorDate(false);
            setSelectedDate(date);
        }
    };

    const handleConfirmTime = (time) => {
        setSelectedTime(time);
    };

    const handleSubmitReservation = () => {
        // Handle reservation submission logic here
        closeModal();
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    if (loading) {
        return (
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
        );
    }

    if (error) {
        return <div className="text-red-500">Error loading barber details!</div>;
    }

    if (!data || !data.barber) {
        return (
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
        );
    }

    const barber = data.barber;

    // Trim whitespace and parse location and images
    const location = JSON.parse(barber.location.trim());
    const coordinates = [location.latitude, location.longitude];

    const imagesArray = JSON.parse(barber.images.trim()).images || [];

    return (
        <>
            <NavbarWithMegaMenu />
            <div className="min-h-screen">
                <Modal
                    isOpen={modalOpen}
                    onRequestClose={closeModal}
                    contentLabel="Reservation Modal"
                    className="modalContent fixed inset-0 flex items-center justify-center z-20"
                    overlayClassName="modalOverlay fixed inset-0 bg-black bg-opacity-50 z-20"
                >
                    <div className="bg-white p-6 rounded-lg -lg max-w-md w-full">
                        <h2 className="text-xl font-bold mb-4">Reservation Modal</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Service Type:</label>
                            <select
                                className="border rounded px-3 py-2 w-full"
                                value={selectedService}
                                onChange={(e) => setSelectedService(e.target.value)}
                            >
                                <option value="">Select service...</option>
                                <option value="hair">Hair</option>
                                <option value="shave">Shave</option>
                                <option value="both">Both</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Cosmetique:</label>
                            <select
                                className="border rounded px-3 py-2 w-full"
                                value={selectedCosmetique}
                                onChange={(e) => setSelectedCosmetique(e.target.value)}
                            >
                                <option value="">Select cosmetique...</option>
                                <option value="creatine">Creatine</option>
                                <option value="protein">Protein</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Date:</label>
                            <input
                                type="date"
                                className="border rounded px-3 py-2 w-full"
                                onChange={(e) => handleConfirmDate(e.target.value)}
                            />
                            {errorDate && <p className="text-red-500">Please select a valid date.</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Time:</label>
                            <input
                                type="time"
                                className="border rounded px-3 py-2 w-full"
                                onChange={(e) => handleConfirmTime(e.target.value)}
                            />
                        </div>
                        <button
                            className="bg-[#1FAE72] hover:bg-[#169f5c] text-white px-4 py-2 rounded"
                            onClick={handleSubmitReservation}
                        >
                            Book Now
                        </button>
                        <button
                            className="bg-gray-300 ml-2 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
                            onClick={closeModal}
                        >
                            Cancel
                        </button>
                    </div>
                </Modal>

                <div className="max-w-5xl mx-auto px-4 py-6">
                    <div className="flex items-center justify-between">
                        <Link to={'/salons'}> <IoMdArrowBack size={24} className="cursor-pointer" /></Link>
                        <FaRegHeart size={24} className="cursor-pointer" />
                    </div>

                    <div className="mt-6 bg-white rounded-lg -md overflow-hidden flex flex-col md:flex-row">
                        <div className="w-full md:w-1/2 mb-4 md:mb-0">
                            <Slider {...settings}>
                                {imagesArray.length > 0 ? (
                                    imagesArray.map((image, index) => (
                                        <div key={index} className="flex justify-center">
                                            <img
                                                src={image}
                                                alt={`Image ${index}`}
                                                className="w-full rounded-lg -md"
                                            />
                                        </div>
                                    ))
                                ) : (
                                    <div className="flex justify-center">
                                        <img src={barber.logo} alt="Barber Logo" className="w-full rounded-lg -md" />
                                    </div>
                                )}
                            </Slider>
                        </div>

                        <div className="w-full md:w-1/2 p-6">
                            <h1 className="text-3xl font-bold">{barber.name}</h1>
                            <p className="text-gray-600">{location.name}</p>
                            <p>Number of Workers: {barber.numberofworkers}</p>
                            <p>Rating: {barber.rating} (based on reviews)</p>
                            <p>Description: {barber.description}</p>
                            <button onClick={openModal} className="mt-6 bg-[#1FAE72] hover:bg-[#169f5c] text-white px-4 py-2 rounded">
                                Reserve
                            </button>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h2 className="text-xl font-bold mb-2">Location:</h2>
                        <MapContainer center={coordinates} zoom={13} style={{ height: "300px", width: "100%" }}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={coordinates}>
                                <Popup>{location.name}</Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Barber;
