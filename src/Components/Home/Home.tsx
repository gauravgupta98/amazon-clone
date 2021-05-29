import { useEffect, useState } from "react";

import "./Home.css";

import Product from "../Product/Product";
import amazonbackground from "../../resources/amazonbackground.jpg";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetch("https://fakestoreapi.com/products").then(
        (res) => res.json()
      );

      setProducts(products);
    };

    getProducts();
  }, []);

  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__backgroundimage"
          src={amazonbackground}
          alt="amazon prime background"
        />

        <div className="home__grid">
          {products?.map(
            ({ id, title, price, description, category, image }) => (
              <Product
                key={id}
                id={id}
                title={title}
                price={price}
                image={image}
                category={category}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
