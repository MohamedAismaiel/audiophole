import { useRouter } from "next/router";
import Image from "next/image";
import { Fragment, useContext } from "react";
import { CartContext } from "../context/cartContext";
const CartOverlay = (props) => {
  const itemctx = useContext(CartContext).items;
  const totalPricectx = useContext(CartContext).totalPrice;
  const addItemctx = useContext(CartContext).addItem;
  const removeItemctx = useContext(CartContext).removeItem;
  const removeAllctx = useContext(CartContext).removeAll;

  const router = useRouter();
  let cartQuantity = 0;
  itemctx.forEach((item) => {
    cartQuantity = cartQuantity + item.amount;
  });

  const addCartHandler = (item) => {
    addItemctx({
      cartName: item.cartName,
      price: item.price,
      picture: item.cartPhoto,
      amount: 1,
      id: item.id,
    });
  };
  const removeCartHandler = (id) => {
    removeItemctx(id);
  };
  const checkoutHandler = () => {
    router.push("/checkout");
    props.hidecart();
  };
  const removeAll = () => {
    removeAllctx();
    props.hidecart();
  };
  return (
    <section className="overlay">
      <div className="cartOuter">
        <div className="toclosemodal" onClick={props.hidecart}></div>
        <div className="container just-end">
          <div className="cart-box">
            <div className="cart-box-titlebox">
              <h2 className="cart-box-titlebox-title">cart ({cartQuantity})</h2>
              <h3 onClick={removeAll} className="cart-box-titlebox-button ">
                Remove all
              </h3>
            </div>
            {itemctx.map((item) => {
              return (
                <div key={item.id} className="checkout-box-2-summary">
                  <div className="checkout-box-2-summary-image">
                    <Image
                      src={item.picture}
                      // width={150}
                      // height={150}
                      layout="fill"
                      quality={60}
                    />
                  </div>
                  <div className="checkout-box-2-summary-detailsbox">
                    <p className="checkout-box-2-summary-detailsbox-name">
                      {item.cartName}
                    </p>
                    <p className="checkout-box-2-summary-detailsbox-price">
                      $ {item.price.toLocaleString()}
                    </p>
                  </div>
                  <div className="buttons-box button-box-checkout">
                    <button className="button button-quan mrr-0">
                      <span
                        className="button-minus"
                        onClick={removeCartHandler.bind(null, item.id)}
                      >
                        &minus;
                      </span>
                      <span className="button-number">{item.amount}</span>
                      <span
                        onClick={addCartHandler.bind(null, item)}
                        className="button-plus"
                      >
                        &#x2B;
                      </span>
                    </button>
                  </div>
                </div>
              );
            })}
            {itemctx.length != 0 && (
              <Fragment>
                <div className="checkout-box-2-summary-total">
                  <p className="checkout-box-2-summary-total-title">TOTAL</p>
                  <p className="checkout-box-2-summary-total-price">
                    $ {totalPricectx.toLocaleString()}
                  </p>
                </div>
                <button
                  className="button checkout-button"
                  onClick={checkoutHandler}
                >
                  CHECKOUT
                </button>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default CartOverlay;
