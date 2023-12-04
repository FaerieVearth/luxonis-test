import React from 'react';

interface Apartment {
  url: string;
  name: string;
  address: string;
  price: number;
}

const CardWrapper: React.FC<{ apartment: Apartment }> = ({ apartment }) => {
  return (
    <div className="bg-white self-stretch rounded-lg shadow-md md:hover:scale-105 md:hover:bg-blue-50 md:cursor-pointer md:transition ease-in-out delay-50 max-w-[400px] sm:w-2/5 md:w-1/4 sm:h-fill">
      <img src={apartment.url} alt={apartment.name} className="w-full h-50 object-cover rounded-t-lg" />
      <div className="p-4 flex flex-col">
        <h2 className="text-xl font-bold text-red-600">{apartment.name}</h2>
        <p className="text-gray-500">{apartment.address}</p>
        <p className="text-gray-700 mt-2">{apartment.price}</p>
      </div>
    </div>
  );
};

export default CardWrapper;

