import Link from "next/link";
const Footer1 = () => {
  const linkedInhandler = () => {
    const win = window.open(
      "https://www.linkedin.com/in/mohamed-ali-7a5017103/",
      "_blank"
    );
    win.focus();
  };
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerBox500PX">
          <div className="footerBox500PX-logo">
            <span>audiophile</span>
          </div>
          <div className="footerBox500PX-list">
            <ul className="footerBox500PX-list-items">
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
          </div>
          <p className="footerBox500PX-text">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <p className="footerBox500PX-copyright">
            <span>&copy; Copyright 2021. All Coding Rights Reserved To</span>
            <span onClick={linkedInhandler} className="link">
              &nbsp; Mohamed A.Ismaiel
            </span>
          </p>
          <div className="footerBox500PX-social">
            <a
              className="footerBox500PX-social-facebook"
              href="https://www.facebook.com/profile.php?id=1196972374"
              target="_blank"
              rel="noreferrer"
            ></a>
            <a
              className="footerBox500PX-social-twitter"
              href="https://www.twitter.com/m7mdismaiel/"
              target="_blank"
              rel="noreferrer"
            ></a>
            <a
              className="footerBox500PX-social-instagram"
              href="https://www.instagram.com/m7mdismaiel/"
              target="_blank"
              rel="noreferrer"
            ></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer1;
