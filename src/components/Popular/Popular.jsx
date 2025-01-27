import burgerBg from "../../../public/images/burger bg.png";
import buttonImg from "../../../public/images/button.png";
import Carousel from "react-bootstrap/Carousel";
import './Popular.css';

function Popular() {
  return (
    <section className="popular p-5 position-relative d-flex flex-column align-items-center bg-dark justify-content-center">
      <h2 className="text-end headlineColor">POPULAR Menus</h2>
      
      {/* Discount Banner */}
      <div className="banner d-flex justify-content-center align-items-center position-absolute">
        <img className="position-absolute" src={buttonImg} alt="Discount Banner" />
        <span>20% off</span>
      </div>
      
      {/* Smooth Carousel */}
      <Carousel className="crs mt-5 p-5" fade>
        <Carousel.Item className="slidImg">
          <span className="back-text">BURGER</span>
          <img className="d-block w-100" src={burgerBg} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item className="slidImg">
          <span className="back-text">BURGER</span>
          <img className="d-block w-100" src={burgerBg} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item className="slidImg">
          <span className="back-text">BURGER</span>
          <img className="d-block w-100" src={burgerBg} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      
      {/* Menu Item with Price */}
      <div className="items d-flex justify-content-between align-items-center mt-4">
        <div className="order position-relative">
          <img src={buttonImg} className="position-absolute" alt="Order Button" />
          <span>Order Now</span>
        </div>
        <span className="price">MAD 45</span>
      </div>
    </section>
  );
}

export default Popular;

