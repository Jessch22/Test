import "../styles/navbarStyle.css"

const navigation = [
  { name: 'Home', href:"#home", current: true},
  { name: 'About', href:"#about", current: false},
  { name: 'Projects', href:"#projects", current: false},
  { name: 'Contact', href:"#contact", current: false},
];

const Navbar = () => {
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