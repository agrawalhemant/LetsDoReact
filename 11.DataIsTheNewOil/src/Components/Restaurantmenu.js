import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../Utils/Hooks/useRestaurantMenu';
import Loader from './Loader';
import RestaurantCategory from './RestaurantCategory';
import { useState } from 'react';

const Restaurantmenu = () => {
  const { id } = useParams();
  const restaurantInfo = useRestaurantMenu(id);

  const [showIndex, setShowIndex] = useState(-1); //setting initial state as -1 so that no category is open by default
  if (restaurantInfo === null || restaurantInfo.cards == undefined) {
    return <Loader />;
  }

  const { name, cuisines, costForTwoMessage } =
    restaurantInfo?.cards[2]?.card?.card?.info;
  const categoriesData =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (card) =>
        card?.card?.card['@type'] ==
        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold">{name}</h1>
      <p className="my-2 text-lg font-semibold">
        {cuisines.join(', ')} : {costForTwoMessage}
      </p>
      {categoriesData.map((category, index) => {
        return (
          <RestaurantCategory
            key={category?.card?.card?.categoryId}
            data={category?.card?.card}
            showItems={index === showIndex && true}
            setShowIndex={() => setShowIndex(index)}
            hideShowIndex={() => setShowIndex(-1)}
          />
        );
      })}
    </div>
  );
};

export default Restaurantmenu;
