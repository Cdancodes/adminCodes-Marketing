// Inside your component where the navbar is
import { Link } from 'react-router-dom';

// Update your navbar
<div className="side-navbar">
  <h3 className="contact-us">Contact Us</h3>
  <nav>
    <ul>
      <li><Link to="/contact">Contact Us</Link></li>
      {/* Add other links to different pages if needed */}
    </ul>
  </nav>
  <button className="btn-logout" onClick={logout}>LogOut</button>
</div>
