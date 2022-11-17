import React from "react";
import Product from "./Product";
import burstImg from "../assets/images/burst.svg";
import iceImg from "../assets/images/ice.jpg";
import ice1Img from "../assets/images/ice-1.jpg";
import ice2Img from "../assets/images/ice-2.jpg";

import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <img src={burstImg} alt="melt" />
      <div className="home__container">
        <div className="home__row">
          <Product
            id={645696}
            title="یخ های یخچالهای دماوند"
            price={13.4}
            rating={3}
            img={ice1Img}
          />
          <Product
            id={89616}
            title="یخ های آبشار نیاگارا"
            price={10.3}
            rating={4}
            img={iceImg}
          />
        </div>
        <div className="home__row">
          <Product
            id={893241}
            title="یخ های یخچال های برقی "
            price={2.3}
            rating={1}
            img={iceImg}
          />
          <Product
            id={841158}
            title=" یخهای کارخانه ای اسلامشهر"
            price={3.2}
            rating={2}
            img={ice1Img}
          />
          <Product
            id={327139}
            title="یخ هاس ساخته شده دستی"
            price={10}
            rating={3}
            img={iceImg}
          />
        </div>
        <div className="home__row">
          <Product
            title="یخ های کوهستان های هیمالیا"
            price={22}
            rating={5}
            img={ice2Img}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
