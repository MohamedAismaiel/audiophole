import {
  faArrowCircleRight,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
const HomeBodySection = (props) => {
  return (
    <div className={`bodySectionOuter ${props.ham}`}>
      <section className="container">
        <div className="sharedProducts ">
          <div className="sharedProducts-headphones">
            <div className="sharedProducts-image">
              <Image
                src={
                  "https://res.cloudinary.com/audiophile/image/upload/v1627483735/assets/shared/desktop/image-headphones_sscp9o.png"
                }
                width={700}
                height={636}
                layout="responsive"
              />
            </div>
            <p className="sharedProducts-text">HEADPHONES</p>
            <Link href="/headphones">
              <div className="shop-div">
                <p onClick={props.hideham}>SHOP</p>
                <div className="arrow-icon"></div>
              </div>
            </Link>
          </div>
          <div className="sharedProducts-speakers">
            <div className="sharedProducts-image">
              <Image
                src={
                  "https://res.cloudinary.com/audiophile/image/upload/v1627483735/assets/shared/desktop/image-speakers_e3oznm.png"
                }
                width={700}
                height={636}
                layout="responsive"
              />
            </div>
            <p className="sharedProducts-text">SPEAKERS</p>
            <Link href="/speakers">
              <div className="shop-div">
                <p onClick={props.hideham}>SHOP</p>
                <div className="arrow-icon"></div>
              </div>
            </Link>
          </div>
          <div className={`sharedProducts-earphones ${props.mb}`}>
            <div className="sharedProducts-image">
              <Image
                src={
                  "https://res.cloudinary.com/audiophile/image/upload/v1627483735/assets/shared/desktop/image-earphones_nmjc7k.png"
                }
                width={700}
                height={636}
                layout="responsive"
              />
            </div>
            <p className="sharedProducts-text">EARPHONES</p>
            <Link href="/earphones">
              <div className="shop-div">
                <p onClick={props.hideham}>SHOP</p>
                <div className={`arrow-icon `}></div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
export default HomeBodySection;
