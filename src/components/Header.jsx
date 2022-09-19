import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header>
            <h1>React Forum</h1>
            <nav> <Link to="/home" className="nav-link">
          <button className="home-btn">Home</button>
          </Link> </nav>
        </header>
    )
}

export default Header;