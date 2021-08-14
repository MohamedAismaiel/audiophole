import { useRouter } from "next/dist/client/router";
import Image from "next/image";
const Zx9SpeakerHome = () => {
  const router = useRouter();
  const zx9Handler = () => {
    router.push("/speakers/zx9-speaker");
  };
  return (
    <div className="zx9OrangeBoxContainer">
      <section className="container">
        <div className="zx9OrangeBox">
          <div className="circle-icon"></div>
          <div className="zx9OrangeBox-speakerPhoto">
            <Image
              src={
                "https://res.cloudinary.com/audiophile/image/upload/v1627483714/assets/home/desktop/image-speaker-zx9_qu0dn5.png"
              }
              width={756}
              height={918}
              layout="responsive"
              // objectFit="cover"
              quality={100}
            />
          </div>
          <div className="zx9OrangeBox-textbox">
            <h2 className="zx9OrangeBox-textbox-maintext">ZX9 SPEAKER</h2>
            <p className="zx9OrangeBox-textbox-paragraph">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <button className="button zx9OrangeBox-button" onClick={zx9Handler}>
              SEE PRODUCT
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Zx9SpeakerHome;
