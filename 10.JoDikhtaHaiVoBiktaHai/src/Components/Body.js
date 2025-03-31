import { useState } from 'react';
import { useEffect } from 'react';
import { RESTAURANTS_API_URL } from '../Utils/constants';
import Restaurantcard from './Restaurantcard';
import Loader from './Loader';
import { Link } from 'react-router-dom';

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [originalListOfRestaurants, setOriginalListOfRestaurants] = useState(
    []
  );

  useEffect(() => {
    console.log('useEffect called in body');
    fetchData();
  }, []);

  const [searchText, setSearchText] = useState('');

  const fetchData = async () => {
    const response = await fetch(RESTAURANTS_API_URL);
    const json = await response.json();
    // console.log(
    //   json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setOriginalListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const filterRestaurants = (searchText) => {
    let matchedRestaurants = originalListOfRestaurants.filter((restaurant) =>
      restaurant.info.name
        .toLowerCase()
        .includes(searchText.toLowerCase().trim())
    );
    // console.log(matchedRestaurants);
    setListOfRestaurants(matchedRestaurants);
  };

  //Conditional rendering
  return originalListOfRestaurants == null ||
    originalListOfRestaurants.length === 0 ? (
    <Loader />
  ) : (
    <div id="body">
      <div className="flex justify-center my-2 p-2">
        <input
          className="w-72 px-2 mx-4 border-2 border-solid border-slate-400 rounded-md"
          type="text"
          placeholder="Type restaurant name..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            // filterRestaurants(searchText);
          }}
          onKeyUp={(e) => {
            filterRestaurants(searchText);
          }}
        />
        {/* <button
          className="w-20 bg-slate-400 rounded-lg"
          type="submit"
          onClick={() => {
            console.log(searchText);
            filterRestaurants(searchText);
          }}
        >
          Search
        </button> */}
        <button
          className="bg-slate-100 rounded-lg p-2 hover:bg-slate-200"
          type="submit"
          onClick={() => {
            setListOfRestaurants(
              listOfRestaurants?.filter(
                (restaurant) => restaurant.info.avgRating >= 4.5
              )
            );
            //console.log(listOfRestaurants);
          }}
        >
          see restaurants above 4.5 rating only
        </button>
      </div>
      <div className="flex flex-wrap justify-around">
        {listOfRestaurants.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={'/restaurant/' + restaurant?.info?.id}
          >
            <Restaurantcard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
