import { useState, useEffect, useContext } from 'react';
import { RESTAURANTS_API_URL } from '../Utils/constants';
import Restaurantcard, { withVegLabel } from './Restaurantcard';
import Loader from './Loader';
import { Link } from 'react-router-dom';
import UserContext from '../Utils/Contexts/UserContext';

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [originalListOfRestaurants, setOriginalListOfRestaurants] = useState(
    []
  );
  const [searchText, setSearchText] = useState('');
  const RestaurantcardWithVegLabel = withVegLabel(Restaurantcard);

  //console.log(listOfRestaurants);
  useEffect(() => {
    //console.log('useEffect called in body');
    fetchData();
  }, []);

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

  const { username, setUserName } = useContext(UserContext);
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

        <button
          className="bg-slate-100 rounded-lg p-2 hover:bg-slate-200"
          type="submit"
          onClick={() => {
            setListOfRestaurants(
              listOfRestaurants?.filter(
                (restaurant) => restaurant?.info?.avgRating >= 4.5
              )
            );
          }}
        >
          see restaurants above 4.5 rating only
        </button>

        <label className="inline-flex items-center mx-5 cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            onChange={(event) => {
              if (event.target.checked) {
                setListOfRestaurants(
                  listOfRestaurants?.filter(
                    (restaurant) => restaurant?.info?.veg
                  )
                );
              } else {
                setListOfRestaurants(originalListOfRestaurants);
              }
            }}
          />
          <div className="relative w-11 h-6 bg-gray-500 rounded-full  peer-focus:ring-green-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-green-300">
            Veg Only
          </span>
        </label>

        <input
          className="w-72 px-2 mx-4 border-2 border-solid border-slate-400 rounded-md"
          type="text"
          placeholder="Type username..."
          value={username}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-wrap justify-around">
        {listOfRestaurants.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={'/restaurant/' + restaurant?.info?.id}
          >
            {restaurant?.info?.veg ? (
              <RestaurantcardWithVegLabel resData={restaurant} />
            ) : (
              <Restaurantcard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
