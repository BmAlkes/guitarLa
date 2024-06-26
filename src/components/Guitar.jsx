import React from "react";

const Guitar = ({ product, addToCart }) => {
  const { image, price, description, name, id } = product;

  const handleClick = (product) => {
    addToCart(product);
  };

  return (
    <div className="col-md-6 col-lg-4 my-4 row align-items-center">
      <div className="col-4">
        <img
          className="img-fluid"
          src={`./img/${image}.jpg`}
          alt="imagen guitarra"
        />
      </div>
      <div className="col-8">
        <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
        <p>{description}</p>
        <p className="fw-black text-primary fs-3">${price}</p>
        <button
          type="button"
          onClick={() => handleClick(product)}
          className="btn btn-dark w-100"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Guitar;
