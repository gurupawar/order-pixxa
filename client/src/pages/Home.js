import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPixxas } from "../actions/pixxaActions";
import PizzaCard from "../components/PizzaCard";
import pizzasData from "../data";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPixxas());
  });

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
