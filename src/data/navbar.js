import { faHouse, faAddressCard, faFolderOpen, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const navlist = [
  { name: 'Home', href: "#home", logo: faHouse, current: true },
  { name: 'About', href: "#about", logo: faAddressCard, current: false },
  { name: 'Projects', href: "#projects", logo: faFolderOpen, current: false },
  { name: 'Contact', href: "#contact", logo: faEnvelope, current: false },
];

export default navlist;