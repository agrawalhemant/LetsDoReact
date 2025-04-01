import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../Utils/Hooks/useRestaurantMenu';
import Loader from './Loader';
import RestaurantCategory from './RestaurantCategory';

const Restaurantmenu = () => {
  const { id } = useParams();

  const restaurantInfo = useRestaurantMenu(id);

  if (restaurantInfo === null || restaurantInfo.cards == undefined) {
    return <Loader />;
  }

  const { name, cuisines, costForTwoMessage, avgRating } =
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
      {categoriesData.map((category) => {
        return (
          <RestaurantCategory
            key={category?.card?.card?.categoryId}
            data={category?.card?.card}
          />
        );
      })}
    </div>
  );
};

export default Restaurantmenu;
