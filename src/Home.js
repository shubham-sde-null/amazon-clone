import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="home_image"
        />
        <div className="home__row">
          {/* 1st row 2 products*/}
          <Product
            id="8928116033"
            title="To Kill A MockingBird, Harper Lee, 60th Edition"
            price={2}
            image="https://rukminim1.flixcart.com/image/416/416/kkmwr680/regionalbooks/3/r/g/to-kill-a-mockingbird-50th-anniversary-edition-english-paperback-original-imafzxzq97gnhanz.jpeg?q=70"
            rating={4}
          />
          <Product
            id="8928116034"
            title="Butterfly Rapid Kettle 1.5 Litre + Eco 750 Ml Water Bottle"
            price={30}
            image="https://rukminim1.flixcart.com/image/416/416/l1dwknk0/electric-kettle/1/l/l/-original-imagcyntuc6zchxu.jpeg?q=70"
            rating={4}
          />
        </div>
        <div className="home__row">
          {/* 2nd row 3 products*/}
          <Product
            id="8928116035"
            title="boAt Wave Neo with 1.69 inch , 2.5D Curved Display & Multiple Sports Modes Smartwatch"
            price={23.09}
            image="https://rukminim1.flixcart.com/image/416/416/l3ahpjk0/smartwatch/c/w/8/-original-imagegyhw5gemgnv.jpeg?q=70"
            rating={5}
          />
          <Product
            id="8928116036"
            title="APPLE 2020 Macbook Air M1 - (8 GB/512 GB SSD/Mac OS Big Sur) MGNA3HN/A  (13.3 inch, Silver, 1.29 kg)"
            price={1237.5}
            image="https://rukminim1.flixcart.com/image/416/416/khdqnbk0/computer/f/y/t/apple-original-imafxfyqydgvrkzv.jpeg?q=70"
            rating={5}
          />
          <Product
            id="8928116037"
            title="OnePlus Nord CE 2 Lite 5G (Black Dusk, 128 GB)  (8 GB RAM)"
            price={265}
            image="https://rukminim1.flixcart.com/image/416/416/l2krs7k0/mobile/j/q/l/nord-ce-2-lite-5g-le2505-oneplus-original-imagdwf8gvgqyr7j.jpeg?q=70"
            rating={4}
          />
        </div>
        <div className="home__row">
          {/* 3rd row 1 product*/}
          {/* it's upon us how many componrnts we want to add in each row */}
          <Product
            id="8928116038"
            title="Men Regular Fit Checkered Spread Collar Casual Shirt"
            price={8.7}
            image="https://rukminim1.flixcart.com/image/826/991/k97dxu80/shirt/w/z/g/44-11326780-roadster-original-imafrfx7vbfsat8b.jpeg?q=50"
            rating={4}
          />
          <Product
            id="8928116039"
            title="SAMSUNG 22 inch Full HD IPS Panel Monitor (LF22T354FHWXXL)  (Response Time: 5 ms, 75 Hz Refresh Rate)"
            price={131}
            image="https://rukminim1.flixcart.com/image/416/416/kynb6vk0/monitor/1/n/s/lf22t354fhwxxl-full-hd-22-lf22t354fhwxxl-samsung-original-imagats2rjbg9uhv.jpeg?q=70"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
