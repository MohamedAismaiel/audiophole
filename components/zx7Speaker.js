import { useRouter } from "next/router";
import Image from "next/image";
const Zx7SpeakerHome = () => {
  const router = useRouter();
  const zx7Handler = () => {
    router.push("/speakers/zx7-speaker");
  };

  return (
    <div className="zx7speakerContainer">
      <section className="container">
        <div className="zx7Speaker">
          <h2 className="zx7Speaker-text">ZX7 SPEAKER</h2>
          <button className="button zx7Speaker-button" onClick={zx7Handler}>
            SEE PRODUCT
          </button>
        </div>
      </section>
    </div>
  );
};
export default Zx7SpeakerHome;
