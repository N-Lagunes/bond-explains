import { Link } from "react-router-dom";

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-around',
    background: '#2C619F',
    padding: '10px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
}

function Header() {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Tutorials</Link>
      <Link to="about" style={styles.link}>About</Link>
    </nav>
  );
}

export default Header;