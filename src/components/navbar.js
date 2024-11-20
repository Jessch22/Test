import "../styles/navbarStyle.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faAddressCard, faFolderOpen, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const navigation = [
  { name: 'Home', href: "#home", logo: faHouse, current: true },
  { name: 'About', href: "#about", logo: faAddressCard, current: false },
  { name: 'Projects', href: "#projects", logo: faFolderOpen, current: false },
  { name: 'Contact', href: "#contact", logo: faEnvelope, current: false },
];

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={item.current ? 'active' : ''}
          >
            <FontAwesomeIcon icon={item.logo} />
            <span className="nav-text">{item.name}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar