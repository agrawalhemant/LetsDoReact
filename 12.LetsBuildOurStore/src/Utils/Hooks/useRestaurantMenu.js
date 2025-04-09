import { useEffect, useState } from 'react';
import { MENU_API_URL } from '../constants';

const useRestaurantMenu = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    fetchRestaurantDetails();
  }, []);

  const fetchRestaurantDetails = async () => {
    const response = await fetch(MENU_API_URL + resId);
    const json = await response.json();
    setRestaurantInfo(json?.data);
  };

  return restaurantInfo;
};
export default useRestaurantMenu;
