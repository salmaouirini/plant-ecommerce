import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../Style.css';


const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
            <Link to="/" className="logo">
                <span className="big-v">V</span>
                <div className="text-lines">
                    <span className="small-text">erdant</span>
                    <span className="small-text">ibes</span>
                </div>
            </Link>
                <Link to="/cart" className="cartIcon">
                <ShoppingCartIcon fontSize="large" />
                </Link>
            </nav>
        </div>
      
    );
  };

export default Navbar;
