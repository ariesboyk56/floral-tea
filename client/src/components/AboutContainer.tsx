import "../styles/about.scss";
import About1 from "../images/about/About1.png";
import About2 from "../images/about/About2.png";
const AboutContainer = () => {
  return (
    <div className="aboutContainer">
      <div className="about1">
          <img alt="about" srcSet={`${About1} 2x`} />
          <p>
            Floral Tea is a tea importer and wholesaler based in Vietnam. We hand
            blend and custom craft the world’s finest organic teas and botanicals.
            Our teas are carefully selected directly from growers, each one offering
            a unique story.
          </p>
          <p>The seeds that formed the foundation of Floral were
            first planted in 1996 when Steve Schwartz began his journey of extensive
            study in preventative medicine at the Ayurvedic Institute in New Mexico.
            Since then, Floral has become a leading purveyor of organic and
            specialty teas. Each year Steve travels extensively, returning with rare
            and unique teas from around the world.</p>
      </div>
      <div className="about2">
          <img alt="about" srcSet={`${About2} 2x`} />
          <p>
            Floral offers over 300 varieties of the highest quality teas, sourced
            from the finest tea regions around the world. Our blends include
            classics like Earl Grey, our signature flavors like Hot Cinnamon Spice
            and Paris, several varieties of Tea Blend, more adventurous teas like
            Bamboo and everything in between. No matter which tea you choose, our
            expertise and commitment to quality are brewed into each cup.
          </p>
      </div>
      <div className="background-btn style-btn-1-1">
          <div className="btn primary style-btn-1-2">
          show now
      </div>
      </div>
      
    </div>
  );
};

export default AboutContainer;
