import { useState } from 'react';
import { useEffect } from 'react';
import { API_URL } from '../Utils/constants';
import Restaurantcard from './Restaurantcard';

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch(API_URL);
    const json = await response.json();
    console.log(json.data.data);
    setListOfRestaurants(json?.data?.data);
  };
  if (listOfRestaurants.length === 0) {
    return (
      <div class="loader-container">
        <div class="loader"></div>
      </div>
    );
  }
  return (
    <div id="body">
      <div id="search">
        <input
          id="search-text"
          type="text"
          placeholder="Click filter button to see restaurants that have image"
        />
        <button
          id="search-btn"
          type="submit"
          onClick={() => {
            setListOfRestaurants(
              listOfRestaurants?.filter((rest) => rest.banner_image_es != '')
            );
            console.log(listOfRestaurants);
          }}
        >
          Filter
        </button>
      </div>
      <div id="res-cards">
        {listOfRestaurants
          .sort((a, b) => b.sequence - a.sequence)
          .map((rest) => (
            <Restaurantcard key={rest.brand_id} restData={rest} />
          ))}
      </div>
    </div>
  );
};
export default Body;
