import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MENU_API_URL } from '../Utils/constants';
import Loader from './Loader';

const Restaurantmenu = () => {
  const { id } = useParams();

  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    fetchRestaurantDetails();
  }, []);

  const fetchRestaurantDetails = async () => {
    const response = await fetch(MENU_API_URL + id);
    const json = await response.json();
    // console.log(json?.data);
    setRestaurantInfo(json?.data);
  };

  if (restaurantInfo === null || restaurantInfo.cards == undefined) {
    fetchRestaurantDetails(); //this is to resolve a bug in which the data is not fetched in the first render due to swiggy API internal issue (or may be it has rate limiting)
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
