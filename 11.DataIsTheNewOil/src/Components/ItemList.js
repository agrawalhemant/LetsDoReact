import { RESTAURANT_IMG_URL } from '../Utils/constants';

const ItemList = (props) => {
  console.log(props?.items);
  const items = props?.items;

  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-300 border-t-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2 font-semibold">
              <span>{item?.card?.info?.name}</span>
              <span>
                {' '}
                - ₹{' '}
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12">
            <button className="mx-10 my-20 px-1 absolute bg-green-300 rounded-sm hover:bg-green-500 hover:text-white">
              ADD ➕
            </button>
            <img
              src={RESTAURANT_IMG_URL + item?.card?.info?.imageId}
              alt={item?.card?.info?.name}
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
