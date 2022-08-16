import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (

        <nav className='bg-gray-500 px-8 py-4 '>
          <Link className='mr-3   ' to='/'>Home</Link>
          <Link to='/volunteer'>Volunteers</Link>
            
        </nav>
        
    );
};

export default Header;