import './Header.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
const Header = () => {
  return (
    <>
        <header className='container d-flex pt-3 pb-3 justify-content-between align-items-center'>
            <h1 className='logo'>Fast Food</h1>
                <nav>
                    <ul className='d-flex gap-5 justify-content-between align-items-center'>
                        <li><a href='#Home'>Home</a></li>
                        <li><a href='#Menu'>Menu</a></li>
                        <li><a href='#Why'>Why US</a></li>
                        <li><a href='#Contact'>Contact</a></li>
                    </ul>
                </nav>
            <i className="bi bi-bag-fill fs-2"></i>
        </header>
    </>
  )
}

export default Header