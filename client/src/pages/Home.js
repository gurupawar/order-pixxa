import React from "react";
import PizzaCard from "../components/PizzaCard";
import pizzasData from "../data";
import "./Home.css";

const Home = () => {
  return (
    <div className="home container">
      <div className="card__wrapper">
        {pizzasData.map((pizza, i) => (
          <PizzaCard pizza={pizza} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Home;
