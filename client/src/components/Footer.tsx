import "../styles/footer.scss";
import { ReactComponent as Twitter } from "../images/icons/Twitter.svg";
import { ReactComponent as Instagram } from "../images/icons/Instagram.svg";
import { ReactComponent as Facebook } from "../images/icons/Facebook.svg";
import { ReactComponent as Youtube } from "../images/icons/Youtube.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-social-media">
        <h3>stay connected</h3>
        <div>
          <Twitter />
          <Instagram />
          <Facebook />
          <Youtube />
        </div>
      </div>

      <div className="footer-desc row">
        
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3 col-6 item">
          <h3>TEA</h3>
          <ul>
            <li>Best Seller</li>
            <li>News Release</li>
            <li>Benefits</li>
            <li>Featured</li>
            <li>Sales</li>
          </ul>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3 col-6 item">
          <h3>ABOUT US</h3>
          <ul>
            <li>OUR STORY</li>
            <li>OUR TEAS</li>
          </ul>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3 col-6 item">
          <h3>CUSTOMER SERVICE</h3>
          <ul>
            <li>Contact Us</li>
            <li>Wholesalers</li>
            <li>Where Is My Order?</li>
            <li>My Account</li>
            <li>LoyalTea FAQs</li>
          </ul>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3 col-6 item">
          <h3>EXPLORE</h3>
          <ul>
            <li>Find my tea Quiz</li>
            <li>Tea 101</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>

      <div className="footer-copyright">
        © 2022 Art of Tea, All Rights Reserved | Privacy Policy | Legal
      </div>
    </div>
  );
};

export default Footer;
