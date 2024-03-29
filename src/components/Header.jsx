
import { Link, NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="header-wrapper">
            <NavLink 
                className={({ isActive }) => {
                    return isActive
                    ? "header.nav.link decor active" 
                    : "header-nav-link";
                }} 
                to="/"
            >
                 Home</NavLink>
            <NavLink className="header-nav-link" to="/articles">Articles</NavLink>
            <NavLink className="header-nav-link" to="/contacts">Contacts</NavLink>
            <NavLink className="header-nav-link new-article-header" to="/new-article">Create article</NavLink>
            
            
        </div>    
    );
};

export default Header;