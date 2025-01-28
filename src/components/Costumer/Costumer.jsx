import Carousel from "react-bootstrap/Carousel";
import "./Costumer.css";
import HeaderText from "../HeaderText/HeaderText";
import quote from "../../../public/images/quote.png";
import costImg from "../../../public/images/cos1.png";

const Costumer = () => {
  return (
    <>
      <section className="costumers d-flex justify-content-center align-items-center flex-column">
        <HeaderText className="headline mt-5">What Costumer Say</HeaderText>
        <Carousel className="crs mt-5 p-5 " fade>
          <Carousel.Item className="slidImg ">
            <div className="cos-card d-flex justify-content-center align-items-center flex-column">
              <img className="d-block w-100" src={costImg} alt="First slide" />
              <div className="cos-card-body">
                <h2>John Devin</h2>
                <p>he best burger l've ever had! super fresh and delicious</p>
                <div className="items d-flex align-items-center justify-content-evenly fs-1">
                  <i className="bi bi-hand-thumbs-up-fill"></i>
                  <i className="bi bi-hand-thumbs-down-fill"></i>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className="slidImg ">
            <div className="cos-card d-flex justify-content-center align-items-center flex-column">
              <img className="d-block w-100" src={costImg} alt="First slide" />
              <div className="cos-card-body">
                <h2>Amine Ben</h2>
                <p>he best burger l've ever had! super fresh and delicious</p>
                <div className="items d-flex align-items-center justify-content-evenly fs-1">
                  <i className="bi bi-hand-thumbs-up-fill"></i>
                  <i className="bi bi-hand-thumbs-down-fill"></i>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className="slidImg ">
            <div className="cos-card d-flex justify-content-center align-items-center flex-column">
              <img className="d-block w-100" src={costImg} alt="First slide" />
              <div className="cos-card-body">
                <h2>Mohamed Ali</h2>
                <p>he best burger l've ever had! super fresh and delicious</p>
                <div className="items d-flex align-items-center justify-content-evenly fs-1">
                  <i className="bi bi-hand-thumbs-up-fill"></i>
                  <i className="bi bi-hand-thumbs-down-fill"></i>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};

export default Costumer;
