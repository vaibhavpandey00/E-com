import './navbar.css'
import Cart from '../Assets/bag.png'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
const Navbar = () => {
    const [menu, setMenu] = useState("Home");
    const { getTotalCartItems } = useContext(ShopContext);
    return (
        <>
            <div className="container">
                <div className="Navitem">
                    <h1>LOGO</h1>
                    <ul>
                        <li onClick={() => { setMenu("Home") }}><Link style={{ textDecoration: 'none', color: 'black' }} to='/'>Home</Link>{menu === "Home" ? <hr /> : <></>}</li>
                        <li onClick={() => { setMenu("Men") }}><Link style={{ textDecoration: 'none', color: 'black' }} to='/mens'>Men</Link>{menu === "Men" ? <hr /> : <></>}</li>
                        <li onClick={() => { setMenu("Women") }}><Link style={{ textDecoration: 'none', color: 'black' }} to='/womens'>Women</Link>{menu === "Women" ? <hr /> : <></>}</li>
                        <li onClick={() => { setMenu("Kids") }}><Link style={{ textDecoration: 'none', color: 'black' }} to='/kids'>Kids</Link>{menu === "Kids" ? <hr /> : <></>}</li>
                    </ul>
                    <div className="login-cart-count">
                        <Link style={{ textDecoration: 'none', color: 'black' }} to='login'><div className="btn">Login</div></Link>
                        <Link style={{ textDecoration: 'none' }} to='cart'><img className="cart" src={Cart} alt="logo" /></Link>
                        <div className="count count-zero">{getTotalCartItems()}</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar;