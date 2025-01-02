import { Link } from 'react-router-dom';
import './index.css'

export default function DesktopMenu() {
  return (
    <nav>
      <Link to='/beans'>Beans</Link>
      <Link to='facts'>Facts</Link>
      <Link to='recipies'>Recipes</Link>
      <Link to='combinations'>Combinations</Link>
      <Link to='history'>History</Link>
      <Link to='about'>About</Link>
    </nav>
  );
}
