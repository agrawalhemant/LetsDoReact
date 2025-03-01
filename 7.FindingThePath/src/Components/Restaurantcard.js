import { RESTAURANT_IMG_URL } from '../Utils/constants';

const Restaurantcard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info;
  const deliveryTime = sla?.slaString;
  return (
    <div className="res-card">
      <img
        className="res-img"
        src={RESTAURANT_IMG_URL + cloudinaryImageId}
        alt="restaurant image"
      />

      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export default Restaurantcard;
