import React, { useState } from 'react';

interface ItemsPerPageProps {
  onChange: (value: number) => void;
}

const ItemsPerPage: React.FC<ItemsPerPageProps> = ({ onChange }) => {
  const [value, setValue] = useState(12);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = parseInt(event.target.value);
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div className='w-full flex justify-center items-center'>
      <label htmlFor='itemsPerPage' className='mr-2'>
        Items per page:
      </label>
      <select className='my-4 px-2' value={value} onChange={handleChange}>
        <option value={12}>12</option>
        <option value={24}>24</option>
        <option value={36}>36</option>
      </select>
    </div>
  );
};

export default ItemsPerPage;
