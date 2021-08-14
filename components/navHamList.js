import { useEffect } from "react/cjs/react.development";
import HomeBodySection from "./bodySection";

const NavHamList = (props) => {
  let hidden = "";
  let hideStatus = props.hidden;

  if (!hideStatus) {
    hidden = "hidden";
  } else hidden = "";

  const hideHam = () => {
    props.setham(false);
  };

  return (
    <section className={`navHamListOuter ${hidden}`}>
      <div onClick={hideHam} className={`navhamlist ${hidden}`} />

      <div className={`navhamlist-box ${hidden}`}>
        <HomeBodySection mb={"mb-4"} hideham={hideHam} ham={"forHam"} />
      </div>
    </section>
  );
};
export default NavHamList;
