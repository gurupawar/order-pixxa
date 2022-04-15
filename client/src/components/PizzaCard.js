import React, { useState } from "react";
import "./PizzaCard.css";

const PizzaCard = ({ pizza }) => {
  const [quantity, setQuantity] = useState(1);
  const [variants, setVariants] = useState("small");

  return (
    <div className="card">
      <h1 className="pizza__name">{pizza.name}</h1>
      <img src={pizza.image} alt={pizza.name} />
      <div className="card__middle">
        <div className="pizza__variants">
          <label htmlFor="pizzaVariants">Variants</label>
          <select
            value={variants}
            onChange={(e) => {
              setVariants(e.target.value);
            }}
            name="pizzaVariants"
            id="pizzaVariants"
          >
            {pizza.variants.map((variant, i) => {
              return (
                <option key={i} value={variant}>
                  {variant}
                </option>
              );
            })}
          </select>
        </div>
        <div className="pizza__quantity">
          <label htmlFor="pizzaQuantity">Quantity</label>
          <select
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            name="pizzaQuantity"
            id="pizzaQuantity"
          >
            {[...Array(10).keys()].map((q, i) => {
              return (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="card__footer">
        <div className="card__price">
          <span>price :</span>
          <span>{pizza.prices[0][variants] * quantity} Rs/-</span>
        </div>
        <div className="addto__cart">
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
