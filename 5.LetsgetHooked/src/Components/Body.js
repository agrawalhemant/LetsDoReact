import Restaurantcard from './Restaurantcard';
import restList from '../Utils/mockdata';
import { useState } from 'react';

const Body = () => {
  //normal variable
  // let listOfRestaurants = restList;

  //state variable
  const [listOfRestaurants, setListOfRestaurants] = useState(restList);
  return (
    <div id="body">
      <div id="search">
        <input
          id="search-text"
          type="text"
          placeholder="Click filter button for restaurants above 4 rating"
        />
        <button
          id="search-btn"
          type="submit"
          onClick={() => {
            setListOfRestaurants(
              listOfRestaurants.filter((rest) => rest.rating > 4)
            );
            console.log(listOfRestaurants);
          }}
        >
          Filter
        </button>
      </div>
      <div id="res-cards">
        {listOfRestaurants.map((rest) => (
          <Restaurantcard key={rest.brand_id} restData={rest} />
        ))}
      </div>
    </div>
  );
};

export default Body;
