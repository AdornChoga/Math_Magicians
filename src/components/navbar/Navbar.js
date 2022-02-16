import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navLinks = [
    {
      id: 1,
      path: '/',
      textContent: 'Home',
    },
    {
      id: 2,
      path: 'calculator',
      textContent: 'Calculator',
    },
    {
      id: 3,
      path: 'quote',
      textContent: 'Quote',
    },
  ];
  return (
    <nav className="nav-bar">
      <h1>Math Magicians</h1>
      <ul>
        {navLinks.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path}>
              {link.textContent}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
