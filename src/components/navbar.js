import "../styles/navbarStyle.css"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes , faBars } from '@fortawesome/free-solid-svg-icons';

const navigation = [
  { name: 'Home', href:"#home", current: true},
  { name: 'About', href:"#about", current: false},
  { name: 'Projects', href:"#projects", current: false},
  { name: 'Contact', href:"#contact", current: false},
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return(
    <>
    <div className="navbar">
      <nav>
        {navigation.map((item) => (
          <a
            key = {item.name}
            href = {item.href}
          >{item.name}</a>
        ))}
      </nav>
    </div>
    
    </>
  )
}
export default Navbar