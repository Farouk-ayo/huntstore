import { useContext, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import CartCtx from "../store/Cartctx";
import classes from "./Page.module.css";
import { Link } from "react-router-dom";

const CartPage = () => {
  const cartCtx = useContext(CartCtx);
  const number = cartCtx.items.length;

  const addToCart = (item) => {
    cartCtx.addItems({
      id: item.id,
      productName: item.productName,
      productImage: item.productImage,
      percentOff: item.percentOff,
      price: item.price,
      quantity: item.quantity,
    });
  };
  const removeCart = (id) => {
    cartCtx.removeItems(id);
  };

  return (
    <section className={classes.CartPage}>
      <div className={classes.links}>
        <Link to="./cart">1. Cart</Link>
        <hr />
        <Link to="./details">2. Details</Link>
        <hr />
        <Link to="./payment">3. Payment</Link>
        <hr />
        <Link to="./review">4. Review</Link>
      </div>
      {number ? (
        <section className={classes.cart}>
          <div>
            {cartCtx.items.map((item) => {
              return (
                <section className={classes.cartInfo}>
                  <div>
                    <img src={item.productImage} alt="" />
                    <div className={classes.eachInfo}>
                      <div className={classes.details}>
                        <h5>{item.productName}</h5>
                        <span>
                          <p>
                            <span>${item.price}.00</span>x
                            <span>{item.quantity}</span>
                          </p>
                          <h2>${item.totalAmount}.00</h2>
                        </span>
                      </div>
                      <div className={classes.btnDiv}>
                        <button
                          className={classes.secondBtn}
                          onClick={removeCart.bind(null, item.id)}
                        >
                          -
                        </button>
                        <p>{item.quantity}</p>
                        <button
                          className={classes.firstBtn}
                          onClick={addToCart.bind(null, item)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <RxCross2 className="RxCross2" />
                </section>
              );
            })}
          </div>

          <section className={classes.totalAmount}>
            <h3>
              <span>Total:</span>
              <span>${cartCtx.totalAmount}</span>
            </h3>
          </section>
        </section>
      ) : (
        <section className={classes.null}>
          <h1>Nothing dey here brother, try add something nigga😌😌</h1>
        </section>
      )}
    </section>
  );
};

export default CartPage;
