import './Navigation.scss';
import { NavLink } from 'react-router-dom';
import React from 'react';

export default function Navigation() {
  return (
    <>
      <div className="site_nav">
        <NavLink to="/" className="link nav-link">
          Home
        </NavLink>
        <NavLink to="/work" className="link nav-link">
          Work
        </NavLink>
      </div>
    </>
  );
}
