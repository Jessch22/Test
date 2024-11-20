import "../styles/navbarStyle.css";
import navlist from "../data/navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        {navlist.map((navlist) => (
          <a
            key={navlist.name}
            href={navlist.href}
            className={navlist.current ? 'active' : ''}
          >
            <FontAwesomeIcon icon={navlist.logo} />
            <span className="nav-text">{navlist.name}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar