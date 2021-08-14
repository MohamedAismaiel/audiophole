import Link from "next/link";
import { useEffect, useState } from "react/cjs/react.development";
import dynamic from "next/dynamic";

function useWindowResize() {
  if (typeof window !== "undefined") {
    const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
    useEffect(() => {
      const handleSize = () => {
        setSize([window.innerHeight, window.innerWidth]);
      };
      window.addEventListener("resize", handleSize);
      return () => {
        window.removeEventListener("resize", handleSize);
      };
    }, []);
    return size;
  } else return [null, null];
}
const DynamicFooter1 = dynamic(() => import("../components/footer1"), {
  ssr: false,
});
const DynamicFooter2 = dynamic(() => import("../components/footer2"), {
  ssr: false,
});

const Footer = () => {
  const [height, width] = useWindowResize();

  return <>{width <= 500 ? <DynamicFooter1 /> : <DynamicFooter2 />}</>;
};
export default Footer;
