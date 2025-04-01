import { RESTAURANT_IMG_URL } from '../Utils/constants';

const Restaurantcard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info;
  const deliveryTime = sla?.slaString;
  return (
    <div className="w-64 flex flex-col items-center m-4 p-4 border-2 border-solid border-slate-400 rounded-md">
      <img
        className="res-img"
        src={RESTAURANT_IMG_URL + cloudinaryImageId}
        alt="restaurant image"
      />

      <h3 className="text-lg font-bold text-center">{name}</h3>
      <h4 className="text-center">{cuisines.join(', ')}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

// Higher Order COmponent
export const withVegLabel = (Restaurantcard) => {
  return (props) => {
    return (
      <div className="">
        <label className="absolute bg-green-600 text-white m-2 p-1 rounded-md">
          Pure Veg
        </label>
        <Restaurantcard {...props} />
      </div>
    );
  };
};

export default Restaurantcard;
