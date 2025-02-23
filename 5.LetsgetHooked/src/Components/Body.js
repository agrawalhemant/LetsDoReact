import Restaurantcard from './Restaurantcard';
import restList from '../Utils/mockdata';

const Body = () => {
  return (
    <div id="body">
      <div id="search">
        <input
          id="search-text"
          type="text"
          placeholder="Search for restaurants"
        />
        <button id="search-btn" type="submit">
          Search
        </button>
      </div>
      <div id="res-cards">
        {restList.map((rest) => (
          <Restaurantcard key={rest.brand_id} restData={rest} />
        ))}
      </div>
    </div>
  );
};

export default Body;
