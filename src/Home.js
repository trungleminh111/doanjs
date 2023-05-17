import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Products from "./components/Products";
import Banner from "./components/Banner";


const Home = () => {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    setProducts(data.data);
  }, [data]);
  return (
    <div>
      <Banner />
      <Products products={products}/>
    </div>
  );
};

export default Home;
