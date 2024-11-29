import React from "react";
import { useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [error, setError] = useState(null);
  return <div>Home</div>;
};

export default Home;
