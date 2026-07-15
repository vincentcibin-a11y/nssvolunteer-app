import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <Link className="navbar-brand" to="/">
          NSS Volunteer
        </Link>

        <div className="navbar-nav">
          <Link className="nav-link" to="/AddTeam">
            Add Volunteer
          </Link>

          <Link className="nav-link" to="/ViewTeam">
            View Volunteer
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default NavigationBar;