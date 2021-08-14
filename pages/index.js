import HomeBodySection from "../components/bodySection";
import HomeBottomPage from "../components/homeBottom";
import Main from "../components/mainHeader";
import Yx1Earphones from "../components/yx1Earphones";
import Zx7SpeakerHome from "../components/zx7Speaker";
import Zx9SpeakerHome from "../components/zx9SpeakerHome";

const Home = () => {
  return (
    <div className="mainLayout">
      <Main />
      <HomeBodySection />
      <Zx9SpeakerHome />
      <Zx7SpeakerHome />
      <Yx1Earphones />
      <HomeBottomPage />
    </div>
  );
};
export default Home;
