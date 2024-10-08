import React, { useEffect, useState } from "react";
import Footer from "../../componenets/user/footer";
import NavbarWithMegaMenu from "../../componenets/user/navbar";
import useGet from "../../utils/useGet"; // Make sure to import your custom hook for fetching data

export default function Gallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 8; // Set the number of images per page
  const { data, loading, error } = useGet("barbers"); // Fetch all barbers data
  const [allImages, setAllImages] = useState([]);

  useEffect(() => {
    if (data && data.data) {
      const images = data.data.flatMap(barber => JSON.parse(barber.images.trim()).images || []);
      setAllImages(images); // Set all images from barbers
    }
  }, [data]);

  const totalImages = allImages.length;
  const totalPages = Math.ceil(totalImages / imagesPerPage);
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate the images to be displayed on the current page
  const startIndex = (currentPage - 1) * imagesPerPage;
  const currentImages = allImages.slice(startIndex, startIndex + imagesPerPage);

  return (
    <>
      <NavbarWithMegaMenu />

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {loading ? (
          <div className="flex justify-center">Loading images...</div>
        ) : error ? (
          <div className="text-red-500">Error loading images!</div>
        ) : (
          currentImages.map((image, index) => (
            <div key={index} className="relative group">
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src={image} // Use the actual image URL
                alt="gallery-photo"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 ease-in-out rounded-lg flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">Owner Name</span>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            className={`px-4 py-2 mx-2 rounded-full border ${
              currentPage === i + 1 ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <Footer />
    </>
  );
}
