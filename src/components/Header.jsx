import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/' style={{marginRight: '20px'}}>Home</Link>
            <Link to='/login'>Login</Link>

        </div>
    );
};

export default Header;