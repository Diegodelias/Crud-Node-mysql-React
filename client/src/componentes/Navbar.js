import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-dark bg-dark">

            <Link  to={"/"} className="navbar-brand">  
				CRUD Nodejs mysql React

				</Link>

            </nav>

            
        </div>
    );
};

export default NavBar;