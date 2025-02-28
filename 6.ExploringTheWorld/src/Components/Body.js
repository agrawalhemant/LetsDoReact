import { useState } from 'react';
import { useEffect } from 'react';
import { API_URL } from '../Utils/constants';
import Restaurantcard from './Restaurantcard';
import Loader from './Loader';

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [originalListOfRestaurants, setOriginalListOfRestaurants] = useState(
    []
  );
  useEffect(() => {
    fetchData();
  }, []);
  const [searchText, setSearchText] = useState('');
  const fetchData = async () => {
    const response = await fetch(API_URL);
    const json = await response.json();
    //console.log(json.data.data);
    setListOfRestaurants(json?.data?.data);
    setOriginalListOfRestaurants(json?.data?.data);
  };
  const filterRestaurants = (searchText) => {
    let matchedRestaurants = originalListOfRestaurants.filter((rest) =>
      rest.brand_name.toLowerCase().includes(searchText.toLowerCase().trim())
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
      <div id="search">
        <input
          id="search-text"
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
          id="search-btn"
          type="submit"
          onClick={() => {
            console.log(searchText);
            filterRestaurants(searchText);
          }}
        >
          Search
        </button>
        <button
          id="search-btn"
          type="submit"
          onClick={() => {
            setListOfRestaurants(
              listOfRestaurants?.filter((rest) => rest.banner_image_es != '')
            );
            //console.log(listOfRestaurants);
          }}
        >
          see restaurants that have image
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
