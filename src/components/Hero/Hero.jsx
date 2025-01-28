import "./Hero.css";
import buttonImg from "../../../public/images/button.png";
import heroImg from "../../../public/images/hero.png";
const Hero = ({ id }) => {
  return (
    <>
      <section id={id} className="hero d-flex justify-content-evenly align-items-center">
        <div className="hero-texts">
          <h1 className="headline">
            <span>Special Food</span> Every Time For You
          </h1>
          <h4>
            The best chefs and the best delivery men are at your service. Hot
            delicious food will reach you as soon as possible.
          </h4>
          <div className="button d-flex  justify-content-center align-items-center">
            <img src={buttonImg} alt="button" className="position-absolute" />
            <span>ORDER NOW</span>
          </div>
        </div>
        <div className="hero-img">
          <img src={heroImg} alt="" />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,256L48,224C96,192,192,128,288,128C384,128,480,192,576,186.7C672,181,768,107,864,106.7C960,107,1056,181,1152,208C1248,235,1344,213,1392,202.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </section>
    </>
  );
};

export default Hero;
