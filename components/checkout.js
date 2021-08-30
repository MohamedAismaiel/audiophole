import { useRouter } from "next/router";
import { Fragment, useContext, useState } from "react";
import Image from "next/image";
import { CartContext } from "../context/cartContext";
import DoneOverlay from "./checkoutDone";
const CheckoutContent = () => {
  const clearCart = useContext(CartContext).removeAll;
  const router = useRouter();
  const [cartIsDone, setCartIsDone] = useState(false);
  const [emoney, setEmoney] = useState(true);
  const [cash, setCash] = useState(false);
  const itemsctx = useContext(CartContext).items;
  const totalPricectx = useContext(CartContext).totalPrice;
  const [nameIsTouched, setNameIsTouched] = useState(false);
  const [emailIsTouched, setEmailIsTouched] = useState(false);
  const [PhoneIsTouched, setPhoneIsTouched] = useState(false);

  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  function hasNumbers(str) {
    const regex = /\d/g;
    return regex.test(str);
  }
  function isNumber(str) {
    const regex2 = /\d/g;
    const regex = /[a-zA-Z]/g;
    return !regex.test(str) && regex2.test(str);
  }
  const nameIsTouchedHandler = () => {
    setNameIsTouched(true);
  };
  const emailIsTouchedHandler = () => {
    setEmailIsTouched(true);
  };
  const phoneIsTouchedHandler = () => {
    setPhoneIsTouched(true);
  };

  const nameInputHandler = (e) => {
    setNameInput(e.target.value);
  };

  const emailInputHandler = (e) => {
    setEmailInput(e.target.value);
  };
  const phoneInputHandler = (e) => {
    setPhoneInput(e.target.value);
  };

  const enteredNameIsValid = !hasNumbers(nameInput) && nameInput.trim() !== "";
  const nameInputInvalid = !enteredNameIsValid && nameIsTouched;

  const enteredPhoneIsValid = isNumber(phoneInput) && phoneInput.length >= 4;
  const phoneInputInvalid = !enteredPhoneIsValid && PhoneIsTouched;

  const enteredEmailIsValid =
    emailInput.includes("@") && emailInput.includes(".");
  const emailInputInvalid = !enteredEmailIsValid && emailIsTouched;

  const goBackHandler = () => {
    router.back();
  };
  const emoneyHandler = () => {
    setCash(false);
    setEmoney(true);
  };
  const cashHandler = () => {
    setCash(true);
    setEmoney(false);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setNameIsTouched(true);
    setEmailIsTouched(true);
    setPhoneIsTouched(true);
    if (!enteredNameIsValid || !enteredPhoneIsValid || !enteredEmailIsValid) {
      return;
    }
    showDoneHandler();
    clearCart();
    // localStorage.removeItem("items");
    // localStorage.removeItem("price");
  };
  const vatPrice = totalPricectx * 0.2;
  let grandTotal = 0;

  const grandTotalPrice = () => {
    if (totalPricectx !== 0) {
      return (grandTotal = vatPrice + totalPricectx + 50);
    } else return (grandTotal = vatPrice + totalPricectx);
  };
  grandTotalPrice();

  const showDoneHandler = () => {
    setCartIsDone(true);
  };
  const hideDoneHandler = () => {
    setCartIsDone(false);
  };

  const nameInputClass = nameInputInvalid
    ? "checkout-box-1-form1-input invalidBox"
    : "checkout-box-1-form1-input ";
  const nameTextClass = nameInputInvalid
    ? "checkout-box-1-form1-label invalidText"
    : "checkout-box-1-form1-label ";

  const emailInputClass = emailInputInvalid
    ? "checkout-box-1-form1-input invalidBox"
    : "checkout-box-1-form1-input ";
  const emailTextClass = emailInputInvalid
    ? "checkout-box-1-form1-label invalidText"
    : "checkout-box-1-form1-label ";

  const phoneInputClass = phoneInputInvalid
    ? "checkout-box-1-form1-input invalidBox"
    : "checkout-box-1-form1-input ";
  const phoneTextClass = phoneInputInvalid
    ? "checkout-box-1-form1-label invalidText"
    : "checkout-box-1-form1-label ";

  return (
    <section className="checkout-outer">
      {cartIsDone && <DoneOverlay hideDone={hideDoneHandler} />}
      <div className="container">
        <button className="button backButton" onClick={goBackHandler}>
          Go Back
        </button>
        <div className="checkout-box">
          <div className="checkout-box-1">
            <h2 className="checkout-box-1-title">checkout</h2>
            <p className="checkout-box-1-subtitle">Billing Details</p>

            <form
              onSubmit={submitHandler}
              id="checkoutForm"
              className="checkout-box-1-form1"
            >
              <div className="formbox">
                <div className="labelbox">
                  <label htmlFor="name" className={nameTextClass}>
                    Name
                  </label>
                  {nameInputInvalid && (
                    <p className="invalid-text">please enter a valid name</p>
                  )}
                </div>
                <input
                  onBlur={nameIsTouchedHandler}
                  onChange={nameInputHandler}
                  placeholder="John Smith"
                  required
                  type="text"
                  id="name"
                  name="name"
                  className={nameInputClass}
                />
              </div>
              <div className="formbox">
                <div className="labelbox">
                  <label htmlFor="email" className={emailTextClass}>
                    Email Address
                  </label>
                  {emailInputInvalid && (
                    <p className="invalid-text">
                      please enter a valid email format
                    </p>
                  )}
                </div>
                <input
                  onBlur={emailIsTouchedHandler}
                  onChange={emailInputHandler}
                  placeholder="example@gmail.com"
                  required
                  type="email"
                  id="email"
                  name="email"
                  className={emailInputClass}
                />
              </div>
              <div className="formbox">
                <div className="labelbox">
                  <label htmlFor="number" className={phoneTextClass}>
                    Phone Number
                  </label>
                  {phoneInputInvalid && (
                    <p className="invalid-text">
                      please enter a valid phone format
                    </p>
                  )}
                </div>
                <input
                  onBlur={phoneIsTouchedHandler}
                  onChange={phoneInputHandler}
                  placeholder="+1 (202) 555-0136"
                  required
                  type="text"
                  id="number"
                  name="number"
                  className={phoneInputClass}
                />
                <p className="checkout-box-1-subtitle">Shipping Info</p>
              </div>

              <div className="formboxAddress">
                <label
                  htmlFor="address"
                  className="checkout-box-1-form1-label "
                >
                  Address
                </label>
                <input
                  placeholder="1137 Williams Avenue"
                  required
                  type="text"
                  id="address"
                  name="address"
                  className="checkout-box-1-form1-input checkout-box-1-form1-input-address"
                />
              </div>
              <div className="formbox">
                <label htmlFor="zipcode" className="checkout-box-1-form1-label">
                  Zip Code
                </label>
                <input
                  required
                  placeholder="10001"
                  type="text"
                  id="zipcode"
                  name="zipcode"
                  className="checkout-box-1-form1-input"
                />
              </div>
              <div className="formbox">
                <label htmlFor="city" className="checkout-box-1-form1-label">
                  City
                </label>
                <input
                  required
                  placeholder="New York"
                  type="text"
                  id="city"
                  name="city"
                  className="checkout-box-1-form1-input"
                />
              </div>
              <div className="formbox">
                <label htmlFor="country" className="checkout-box-1-form1-label">
                  Country
                </label>
                <input
                  required
                  placeholder="United States"
                  type="text"
                  id="country"
                  name="country"
                  className="checkout-box-1-form1-input"
                />
                <p className="checkout-box-1-subtitle">payment details</p>
              </div>

              <div className="radio-div">
                <p className="radio-div-title">Payment Method</p>
                <div className="radio-div-form">
                  <div className=" radio-div-form-box ">
                    <label>
                      <input
                        defaultChecked
                        type="radio"
                        id="paymentMethod"
                        name="paymentMethod"
                        className="radio-div-form-radio"
                      />
                      <div
                        onClick={emoneyHandler}
                        className="radio-div-form-checkmark"
                      >
                        <p>e-Money</p>
                      </div>
                      <span className="radio-div-form-checkmark-checkmark"></span>
                    </label>
                  </div>
                  <div className=" radio-div-form-box">
                    <label>
                      <input
                        type="radio"
                        id="paymentMethod"
                        name="paymentMethod"
                        className="radio-div-form-radio"
                      />
                      <div
                        onClick={cashHandler}
                        className="radio-div-form-checkmark"
                      >
                        <p>Cash on Delivery</p>
                      </div>
                      <span className="radio-div-form-checkmark-checkmark"></span>
                    </label>
                  </div>
                </div>
              </div>
              {emoney && (
                <Fragment>
                  <div className="formbox">
                    <label
                      htmlFor="emoney"
                      className="checkout-box-1-form1-label"
                    >
                      e-Money Number
                    </label>
                    <input
                      placeholder="12345"
                      required
                      type="text"
                      id="emoney"
                      name="emoney"
                      className="checkout-box-1-form1-input mb-0"
                    />
                  </div>
                  <div className="formbox">
                    <label
                      htmlFor="emoneypin"
                      className="checkout-box-1-form1-label"
                    >
                      e-Money Pin
                    </label>
                    <input
                      placeholder="1234"
                      required
                      type="text"
                      id="emoneypin"
                      name="emoneypin"
                      className="checkout-box-1-form1-input mb-0
                  "
                    />
                  </div>
                </Fragment>
              )}
            </form>
            {cash && (
              <p className="checkout-box-1-form1-cash">
                The ‘Cash on Delivery’ option enables you to pay in cash when
                our delivery courier arrives at your residence. Just make sure
                your address is correct so that your order will not be
                cancelled.
              </p>
            )}
          </div>
          <div className="checkout-box-2">
            <h2 className="checkout-box-2-title">summary</h2>
            {itemsctx.map((item) => {
              return (
                <div key={item.id} className="checkout-box-2-summary">
                  <div className="checkout-box-2-summary-image">
                    <Image
                      src={`${item.picture}`}
                      width={150}
                      height={150}
                      layout="responsive"
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
                  <p className="checkout-box-2-summary-quantity">
                    X{item.amount}
                  </p>
                </div>
              );
            })}
            <div className="checkout-box-2-summary-total">
              <p className="checkout-box-2-summary-total-title">total</p>
              <p className="checkout-box-2-summary-total-price">
                $ {totalPricectx.toLocaleString()}
              </p>
            </div>
            {grandTotal != 0 && (
              <div className="checkout-box-2-summary-total">
                <p className="checkout-box-2-summary-total-title">Shipping</p>
                <p className="checkout-box-2-summary-total-price">$ 50</p>
              </div>
            )}
            <div className="checkout-box-2-summary-total mb-0">
              <p className="checkout-box-2-summary-total-title">
                VAT (included)
              </p>
              <p className="checkout-box-2-summary-total-price">
                $ {vatPrice.toLocaleString()}
              </p>
            </div>
            <div className="checkout-box-2-summary-grandtotal">
              <p className="checkout-box-2-summary-grandtotal-title">
                Grand total
              </p>
              <p className="checkout-box-2-summary-grandtotal-price">
                $ {grandTotal.toLocaleString()}
              </p>
            </div>
            {itemsctx.length != 0 && (
              <button
                type="submit"
                form="checkoutForm"
                className="button checkout-button"
              >
                CONTINUE & PAY
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default CheckoutContent;
