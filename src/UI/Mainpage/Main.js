import bus from "../../assets/bus.png";
import money from "../../assets/money.png";
import time from "../../assets/time.png";
import payment from "../../assets/payment.png";

import classes from "./Main.module.css";
import Sliders from "./SliderMain";

const Main = () => {
  return (
    <body className={classes.body}>
      <main className={classes.main}>
        <Sliders />
        <section className={classes.arrivals}>
          <div className={classes.arrivalText}>
            <h3>new arrivals</h3>
            <h1>
              summer <br /> sale 20% off
            </h1>
            <link rel="stylesheet" href="" />
            shop now
            <link />
          </div>
          <img src="" alt="" />
        </section>
        <section className={classes.gaming}>
          <div className={classes.gamingText}>
            <h3>gamming 4K</h3>
            <h1>
              Desktops &<br /> Laptops
            </h1>
            <link rel="stylesheet" href="" />
            shop now
            <link />
          </div>
          <img src="" alt="" />
        </section>
      </main>
      <main className={classes.mainBottom}>
        <div className={classes.eachBottom}>
          <img src={bus} alt="" />
          <div className={classes.bottomText}>
            <h4>Fast Delivery</h4>
            <p>Start from $10</p>
          </div>
        </div>
        <div className={classes.eachBottom}>
          <img src={money} alt="" />
          <div className={classes.bottomText}>
            <h4>Money Guarantee</h4>
            <p>7 days back</p>
          </div>
        </div>
        <div className={classes.eachBottom}>
          <img src={time} alt="" />
          <div className={classes.bottomText}>
            <h4>365 days</h4>
            <p>For free return</p>
          </div>
        </div>
        <div className={classes.eachBottom}>
          <img src={payment} alt="" />
          <div className={classes.bottomText}>
            <h4>Payment</h4>
            <p>Secure system</p>
          </div>
        </div>
      </main>
      <section className={classes.products}>
        <div>
          <img src="" alt="" />
          <h4>Toys</h4>
        </div>
        <div>
          <img src="" alt="" />
          <h4>Sports</h4>
        </div>
        <div>
          <img src="" alt="" />
          <h4>Gaming</h4>
        </div>
        <div>
          <img src="" alt="" />
          <h4>Furniture</h4>
        </div>
        <div>
          <img src="" alt="" />
          <h4>Fashion</h4>
        </div>
        <div>
          <img src="" alt="" />
          <h4>Camera</h4>
        </div>
      </section>
    </body>
  );
};

export default Main;