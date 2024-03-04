import React, { useState } from 'react';
import './component.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  // State to track the active link
  const [activeLink, setActiveLink] = useState(0);

  // Function to handle link click
  const handleLinkClick = (index) => {
    setActiveLink(index);
  };
  const linkTexts = [
    'Home',
    'Customer',
    'Employee',
    'Booking',
    'Service',
    'Cars',
  ];
  return (
    <div id="sidebar" className="sidebar w-1/5 h-96 flex flex-col mt-5">
      {linkTexts.map((text, index) => {
        const path = text.toLowerCase();
        return (
          <Link
            key={index}
            to={path}
            className={`m-3   text-2xl ${index === activeLink ? 'active' : ''}`}
            onClick={() => handleLinkClick(index)}
          >
            {text}
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
