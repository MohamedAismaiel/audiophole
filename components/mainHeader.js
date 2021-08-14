import { useRouter } from "next/router";
import Image from "next/image";
const Main = () => {
  const router = useRouter();
  const xx99markIIHandler = () => {
    router.push("/headphones/xx99-mark-two-headphones");
  };
  return (
    <div className="mainOuter">
      <section className="container">
        <div className="main">
          <div className="main-text">
            <h3 className="main-text-secondaryHeader">NEW PRODUCT</h3>
            <h2 className="main-text-mainHeader">XX99 Mark II Headphones</h2>
            <p className="main-text-text">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <button onClick={xx99markIIHandler} className="button main-button">
              SEE PRODUCT
            </button>
          </div>
          {/* <div className="main-image"></div> */}
          <div className="imgCont">
            <Image
              src="https://res.cloudinary.com/audiophile/image/upload/v1627434145/Untitled-1.png-1_t2ifbn.jpg"
              alt="photo"
              width={1000}
              height={1250}
              layout="responsive"
              quality={100}
              priority
              className="hero-image"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Main;
