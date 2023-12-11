import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardWrapper from './CardWrapper';
import Pagination from './Pagination';
import ItemsPerPage from './ItemsPerPage';

const CardsContainer: React.FC = () => {
  const [apartments, setApartments] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  const fetchApartments = async (page: Number) => {
    try {
      const response = await axios.get(`http://localhost:5000/apartments?page=${page}&itemsPerPage=${itemsPerPage}`);
      const apartments = response.data.apartments;
      const totalPages = response.data.totalPages;
      setApartments(apartments);
      setTotalPages(totalPages);
    } catch (error) {
      console.error('Error fetching apartments:', error);
    }
  };

  useEffect(() => {
    fetchApartments(currentPage); 
  }, [currentPage, itemsPerPage, fetchApartments]);

  return (
    <div>
      <ItemsPerPage
        onChange={(value: number) => {
          setItemsPerPage(value);
          setCurrentPage(1);
        }}
      />
      <div className='sm:flex sm:flex-wrap gap-4 justify-center items-center'>
        {apartments.map((apartment) => (
          <CardWrapper key={apartment['id']} apartment={apartment} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNextPage={() => {
          setCurrentPage((currentPage) => currentPage + 1);
          console.log(currentPage);
        }}
        onPreviousPage={() => {
          setCurrentPage((currentPage) => currentPage - 1);
          console.log(currentPage);
        }}
        goToPage={(page: number) => {
          setCurrentPage(page);
        }}
      />
    </div>
  );
};

export default CardsContainer;
