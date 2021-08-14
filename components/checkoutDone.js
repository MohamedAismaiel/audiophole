import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import { Fragment, useContext } from "react";
import { CartContext } from "../context/cartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react/cjs/react.development";
const DoneOverlay = (props) => {
  const router = useRouter();
  const clearCart = useContext(CartContext).removeAll;
  const itemctx = useContext(CartContext).items;
  const [showMore, setShowMore] = useState(false);
  const homeHandler = () => {
    router.push("/");
    clearCart();
  };
  let otherItems = [...itemctx];
  otherItems.shift();
  const showMoreHandler = () => {
    setShowMore(true);
  };
  const showlessHandler = () => {
    setShowMore(false);
  };
  const totalPricectx = useContext(CartContext).totalPrice;
  const vatPrice = totalPricectx * 0.2;
  const grandTotal = vatPrice + totalPricectx + 50;
  return (
    <section className="doneOverlay">
      <div className="doneOuter">
        <div className="toclosemodalDone "></div>
        <div className="container just-cent ">
          <div className="done-box">
            <FontAwesomeIcon
              className="icon-checkbox"
              icon={faCheckCircle}
              size="5x"
            />
            <h2 className="done-box-title">
              thank you <br /> for your order
            </h2>
            <p className="done-box-text">
              You will receive an email confirmation shortly.
            </p>
            <div className="done-box-productBox">
              <div className="done-box-productBox-1">
                {itemctx[0] && (
                  <div
                    className={
                      showMore
                        ? "done-box-productBox-1-items mb-2rem"
                        : "done-box-productBox-1-items "
                    }
                  >
                    <div className="done-box-productBox-1-items-image">
                      <Image
                        src={itemctx[0].picture}
                        width={150}
                        height={150}
                        quality={100}
                      />
                    </div>
                    <div className="done-box-productBox-1-items-namebox">
                      <p className="done-box-productBox-1-items-namebox-name">
                        {itemctx[0].cartName}
                      </p>
                      <p className="done-box-productBox-1-items-namebox-price">
                        $ {itemctx[0].price.toLocaleString()}
                      </p>
                    </div>
                    <p className="done-box-productBox-1-items-quantity">
                      X{itemctx[0].amount}
                    </p>
                  </div>
                )}
                {itemctx.length - 1 != 0 && !showMore ? (
                  <div className="done-box-productBox-1-text">
                    <p onClick={showMoreHandler}>
                      and {itemctx.length - 1} other item(s)
                    </p>
                  </div>
                ) : (
                  otherItems.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="done-box-productBox-1-items mb-2rem"
                      >
                        <div className="done-box-productBox-1-items-image">
                          <Image
                            src={item.picture}
                            width={150}
                            height={150}
                            quality={100}
                          />
                        </div>
                        <div className="done-box-productBox-1-items-namebox">
                          <p className="done-box-productBox-1-items-namebox-name">
                            {item.cartName}
                          </p>
                          <p className="done-box-productBox-1-items-namebox-price">
                            $ {item.price.toLocaleString()}
                          </p>
                        </div>
                        <p className="done-box-productBox-1-items-quantity">
                          X{item.amount}
                        </p>
                      </div>
                    );
                  })
                )}
                {showMore && (
                  <div className="done-box-productBox-1-text mt--2rem">
                    <p onClick={showlessHandler}>Show less</p>
                  </div>
                )}
              </div>
              <div className="done-box-productBox-2">
                <p className="done-box-productBox-2-text">GRAND TOTAL</p>
                <p className="done-box-productBox-2-price">
                  $ {grandTotal.toLocaleString()}
                </p>
              </div>
            </div>
            <button onClick={homeHandler} className="button checkout-button">
              BACK TO HOME
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DoneOverlay;
