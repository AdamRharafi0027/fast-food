import './Menu.css'
import burger from '../../../public/images/burger.png';
import HeaderText from '../HeaderText/HeaderText';

const Menu = ({id}) => {
  return (
    <>
        <section id={id} className='menu'>
                <HeaderText className='headline'>Our Menu</HeaderText>
            <div className="menu-cards flex-wrap d-flex mt-5 justify-content-center align-items-center"> 
                <div className="m-card">
                    <div className="m-card-img">
                        <img src={burger} alt="" />
                    </div>
                    <div className="m-card-text">
                        <h2 className='text-capitalize fs-3'>burger</h2>
                        <h4>Classic Cheeseburger</h4>
                        <div className="items d-flex mt-2 justify-content-between align-items-center">
                            <div className="price">MAD 20</div>
                            <i className="bi bi-bag-fill fs-2"></i>
                        </div>
                    </div>
                </div>
                <div className="m-card">
                    <div className="m-card-img">
                        <img src={burger} alt="" />
                    </div>
                    <div className="m-card-text">
                        <h2 className='text-capitalize fs-3'>burger</h2>
                        <h4>Classic Cheeseburger</h4>
                        <div className="items d-flex mt-2 justify-content-between align-items-center">
                            <div className="price">MAD 20</div>
                            <i className="bi bi-bag-fill fs-2"></i>
                        </div>
                    </div>
                </div>
                <div className="m-card">
                    <div className="m-card-img">
                        <img src={burger} alt="" />
                    </div>
                    <div className="m-card-text">
                        <h2 className='text-capitalize fs-3'>burger</h2>
                        <h4>Classic Cheeseburger</h4>
                        <div className="items d-flex mt-2 justify-content-between align-items-center">
                            <div className="price">MAD 20</div>
                            <i className="bi bi-bag-fill fs-2"></i>
                        </div>
                    </div>
                </div>
                <div className="m-card">
                    <div className="m-card-img">
                        <img src={burger} alt="" />
                    </div>
                    <div className="m-card-text">
                        <h2 className='text-capitalize fs-3'>burger</h2>
                        <h4>Classic Cheeseburger</h4>
                        <div className="items d-flex mt-2 justify-content-between align-items-center">
                            <div className="price">MAD 20</div>
                            <i className="bi bi-bag-fill fs-2"></i>
                        </div>
                    </div>
                </div>
                <div className="m-card">
                    <div className="m-card-img">
                        <img src={burger} alt="" />
                    </div>
                    <div className="m-card-text">
                        <h2 className='text-capitalize fs-3'>burger</h2>
                        <h4>Classic Cheeseburger</h4>
                        <div className="items d-flex mt-2 justify-content-between align-items-center">
                            <div className="price">MAD 20</div>
                            <i className="bi bi-bag-fill fs-2"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Menu