import { useRouter } from "next/router";
import Image from "next/image";
const Yx1Earphones = () => {
  const router = useRouter();
  const yx1Handler = () => {
    router.push("/earphones/yx1-earphones");
  };
  return (
    <div className="yx1EarphonesContainer">
      <section className="container">
        <div className="yx1Earphonesbox">
          <div className="yx1Earphonesbox-image">
            <Image
              src="https://res.cloudinary.com/audiophile/image/upload/v1627483710/assets/home/desktop/image-earphones-yx1_cqgnra.jpg"
              quality={100}
              layout="fill"
            />
          </div>
          <div className="yx1Earphonesbox-text">
            <h2 className="yx1Earphonesbox-text-name">YX1 EARPHONES</h2>
            <button className="button zx7Speaker-button" onClick={yx1Handler}>
              SEE PRODUCT
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Yx1Earphones;
