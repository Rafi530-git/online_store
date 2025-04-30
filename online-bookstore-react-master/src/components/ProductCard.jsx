import React from 'react';

// Dynamically import all images from src/assets/images
const images = import.meta.glob('../assets/images/*', {
  eager: true,
  import: 'default',
});

const ProductCard = ({ imgSrc, title, desc }) => {
  const imagePath = images[`../assets/images/${imgSrc}`];

  return (
    <div className="col-md-4">
      <div className="box">
        <div className="img-box">
          <img src={imagePath} alt={title} />
        </div>
        <div className="detail-box">
          <h5>{title}</h5>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
