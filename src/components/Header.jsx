import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header-wrapper">
            <Link to="/">Home</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to="/contacts">Contacts</Link>
            <Link to="/about">About Us</Link>
            <Link to="/products">Products</Link>
        </div>    
    );
};

export default Header;