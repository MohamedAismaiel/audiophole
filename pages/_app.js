import { useState } from "react/cjs/react.development";
import CartOverlay from "../components/cartModal";
import Footer from "../components/footer";
import NavHamList from "../components/navHamList";
import Navigation from "../components/navigation";
import CartContextProvider from "../context/cartContext";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [hamShowed, setHamShowed] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  const showHamListHandler = () => {
    setHamShowed((cur) => (cur = !cur));
  };
  const hideHamHandler = (cur) => {
    setHamShowed(cur);
  };
  return (
    <CartContextProvider>
      {cartIsShown && <CartOverlay hidecart={hideCartHandler} />}
      <Navigation showcart={showCartHandler} showham={showHamListHandler} />
      <NavHamList hidden={hamShowed} setham={hideHamHandler} />
      <Component {...pageProps} />
      <Footer />
    </CartContextProvider>
  );
}

export default MyApp;
