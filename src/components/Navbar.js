import '../stylesheets/Navbar.css';

const Navbar = () => {
  const navLinks = [
    {
      id: 1,
      path: '',
      textContent: 'Home',
    },
    {
      id: 2,
      path: '',
      textContent: 'Calculator',
    },
    {
      id: 3,
      path: '',
      textContent: 'Quote',
    },
  ];
  return (
    <nav className="nav-bar">
      <h1>Math Magicians</h1>
      <ul>
        {navLinks.map((link) => (
          <li key={link.id}>{link.textContent}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
