const Restaurantcard = (props) => {
  const { brand_name, banner_image_es, description, main_offering, rating } =
    props?.restData;
  return (
    <div className="res-card">
      <img
        className="res-img"
        src={
          banner_image_es
            ? banner_image_es
            : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNNLEL-qmmLeFR1nxJuepFOgPYfnwHR56vcw&s'
        }
        alt="food image"
      />

      <h3>{brand_name}</h3>
      <p>{description}</p>
      <p>
        <strong>Rating</strong>: {rating}
      </p>
      <p>
        <strong>Specialty</strong>: {main_offering}
      </p>
    </div>
  );
};

export default Restaurantcard;
