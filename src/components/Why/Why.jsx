import HeaderText from '../HeaderText/HeaderText'
import './Why.css'
import '../Menu/Menu.css'
import delivery from '../../../public/images/delivery.png'
import heart from '../../../public/images/ph_hand-heart.png'
import price from '../../../public/images/price-bold.png'

const Why = ({id}) => {
  return (
    <>
        <section id={id} className='why mt-5'>
            <HeaderText className='headline'>
                Why Choose Us?
            </HeaderText>
            <h4 className='text-center fs-6'>Why Everyone Loves Our Food</h4>
            <div className="why-cards flex-wrap d-flex mt-5 justify-content-center align-items-center">
                <div className="crd ">
                    <img src={delivery} alt="" />
                    <div className="crd-texts">
                        <h2 className='text-capitalize fs-3 text-center'>Fast Delivery</h2>
                        <h6 className='text-center'>Get your food in 30 minutes or less</h6>
                    </div>
                </div>
                <div className="crd ">
                    <img src={heart} alt="" />
                    <div className="crd-texts">
                    <h2 className='text-capitalize fs-3 text-center'>Fresh and healthy Ingredients</h2>
                        <h6 className='text-center'>fresh ingredients sourced locally to be a friend to your health.</h6>
                    </div>
                </div>
                <div className="crd ">
                    <img src={price} alt="" />
                    <div className="crd-texts">
                    <h2 className='text-capitalize fs-3 text-center'>Affordable Prices</h2>
                        <h6 className='text-center'>Enjoy premium quality without breaking the bank</h6>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Why