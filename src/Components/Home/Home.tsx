import React from "react";

import Product from "../Product/Product";

import amazonbackground from "../../resources/amazonbackground.jpg";
import theleanstartup from "../../resources/products/theleanstartup.jpg";
import samsungmonitor from "../../resources/products/samsungmonitor.jpg";
import echodot from "../../resources/products/echodot.jpg";
import ipadpro from "../../resources/products/ipadpro.jpg";
import samsungtv from "../../resources/products/samsungtv.jpg";
import kenwood from "../../resources/products/kenwood.jpg";

import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__backgroundimage"
          src={amazonbackground}
          alt="amazon prime background"
        />

        <div className="home__row">
          <Product
            id="73847929"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            image={theleanstartup}
            price={569.5}
            rating={4}
          />
          <Product
            id="23728730"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            image={samsungmonitor}
            price={11999}
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="11121092"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            image={kenwood}
            price={5799.99}
            rating={3}
          />
          <Product
            id="34353000"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            image={echodot}
            price={6100.99}
            rating={5}
          />
          <Product
            id="50323344"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            image={ipadpro}
            price={35100.79}
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="22444299"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            image={samsungtv}
            price={71099.1}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
