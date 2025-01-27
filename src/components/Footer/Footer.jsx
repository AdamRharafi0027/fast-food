import './Footer.css'

const Footer = () => {
  return (
    <>
        <footer className="footer">
            <h1 className='logo'>Fast Food</h1>
            <div className="social d-flex align-items-center justify-content-center flex-wrap">
                <div className="facebook d-flex align-items-center justify-content-center">
                <i className="bi bi-facebook"></i>
                <a href='#'>https://facebook.com/FastFoodOfficial</a>
                </div>
                <div className="instagram d-flex align-items-center justify-content-center">
                <i className="bi bi-instagram"></i>
                <a href='#'>https://intagram.com/fastfood</a>
                </div>
                <div className="twitter d-flex align-items-center justify-content-center">
                <i className="bi bi-twitter-x"></i>
                <a href='#'>https://twitter.com/FastFoodOfficial</a>
                </div>
            </div>
            <p>Copyright©2025 Fast Food. All right reserved, dev by adam rharafi</p>
        </footer>
    </>
  )
}

export default Footer