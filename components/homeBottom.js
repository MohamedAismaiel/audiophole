import Image from "next/image";
const HomeBottomPage = () => {
  return (
    <div className="homeBottomOuter">
      <section className="container">
        <div className="homeBottomBox">
          <div className="homeBottomBox-text">
            <h3 className="homeBottomBox-text-header">
              Bringing you the <span>best</span> audio gear
            </h3>
            <p className="homeBottomBox-text-paragraph">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
          <div className="homeBottomBox-image">
            <Image
              src={
                "https://res.cloudinary.com/audiophile/image/upload/v1627483733/assets/shared/desktop/image-best-gear_c7cmuq.jpg"
              }
              // width={540}
              // height={588}
              quality={100}
              layout="fill"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
export default HomeBottomPage;
