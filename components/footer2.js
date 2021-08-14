import Link from "next/link";
const Footer2 = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerBox">
          <div className="footerBox-leftside">
            <div className="footerBox-leftside-logo">
              <span>audiophile</span>
            </div>
            <p className="footerBox-leftside-text">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
            <p className="footerBox-leftside-copyright">
              <span>&copy; Copyright 2021. All Coding Rights Reserved To</span>
              <a
                className="link"
                href="https://www.linkedin.com/in/mohamed-ali-7a5017103/"
                target="_blank"
                rel="noreferrer"
              >
                &nbsp; Mohamed A.Ismaiel
              </a>
            </p>
          </div>
          <div className="footerBox-rightside">
            <ul className="footerBox-rightside-list">
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
            <div className="footerBox-rightside-social">
              <a
                className="footerBox-rightside-social-facebook"
                href="https://www.facebook.com/profile.php?id=1196972374"
                target="_blank"
                rel="noreferrer"
              ></a>
              <a
                className="footerBox-rightside-social-twitter"
                href="https://www.twitter.com/m7mdismaiel/"
                target="_blank"
                rel="noreferrer"
              ></a>
              <a
                className="footerBox-rightside-social-instagram"
                href="https://www.instagram.com/m7mdismaiel/"
                target="_blank"
                rel="noreferrer"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer2;
