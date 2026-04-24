import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__brand">
        <span className="navbar__initials">BA</span>
        <span className="navbar__name">Anvesh Beerelli</span>
      </div>

      <button
        className={`navbar__burger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <a
            href="https://github.com/BeerelliAnvesh-git"
            target="_blank"
            rel="noreferrer"
            className="nav-link nav-link--github"
            onClick={() => setMenuOpen(false)}
          >
            GitHub ↗
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
