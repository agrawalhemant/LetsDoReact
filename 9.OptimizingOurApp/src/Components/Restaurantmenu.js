import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../Utils/Hooks/useRestaurantMenu';
import Loader from './Loader';

const Restaurantmenu = () => {
  const { id } = useParams();

  const restaurantInfo = useRestaurantMenu(id);

  if (restaurantInfo === null || restaurantInfo.cards == undefined) {
    return <Loader />;
  }

  const { name, cuisines, costForTwoMessage, avgRating } =
    restaurantInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  return (
    <div id="restaurant-menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(', ')} : {costForTwoMessage}
      </p>
      <p>Rating: {avgRating}</p>
      <h2>MENU</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} : Rs.
            {item?.card?.info?.price || item?.card?.info?.defaultPrice}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurantmenu;
