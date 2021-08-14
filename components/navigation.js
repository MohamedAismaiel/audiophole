import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/dist/client/router";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { useEffect, useState } from "react/cjs/react.development";
const Navigation = (props) => {
  const router = useRouter();

  const itemctx = useContext(CartContext).items;
  const [bumpClass, setBumpClass] = useState(false);

  const btnClasses = `navbar-cart ${bumpClass ? "bump" : ""}`;

  useEffect(() => {
    if (itemctx.length === 0) {
      return;
    }
    setBumpClass(true);
    const timer = setTimeout(() => {
      setBumpClass(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [itemctx, itemctx.length]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div onClick={props.showham} className="navvham">
          <div className="navbar-hamList" />
        </div>

        <div className="navbar-logo">
          <h2>
            <Link href="/">audiophile</Link>
          </h2>
        </div>
        <ul className="navbar-navList">
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/headphones">HEADPHONES</Link>
          </li>
          <li>
            <Link href="/speakers">SPEAKERS</Link>
          </li>
          <li>
            <Link href="/earphones">EARPHONES</Link>
          </li>
        </ul>
        <div className="cart-div">
          {/* <FontAwesomeIcon className="icon" icon={faShoppingCart} /> */}
          <div onClick={props.showcart} className={btnClasses}></div>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
