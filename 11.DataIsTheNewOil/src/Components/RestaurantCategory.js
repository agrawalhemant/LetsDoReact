import ItemList from './ItemList';
import { useState } from 'react';

const RestaurantCategory = ({
  data,
  showItems,
  setShowIndex,
  hideShowIndex,
}) => {
  const handleClick = () => {
    if (showItems) {
      hideShowIndex();
    } else {
      setShowIndex();
    }
  };

  return (
    <div className="w-6/12 bg-gray-50 my-6 px-4 mx-auto p-2 rounded-lg shadow-gray-300 shadow-lg">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold">
          {data?.title} ({data?.itemCards?.length} Items)
        </span>
        <span className="text-lg">{showItems ? '🔼' : '🔽'}</span>
      </div>
      {showItems && <ItemList items={data?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
