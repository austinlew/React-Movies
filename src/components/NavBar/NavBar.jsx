import { Link } from 'react-router-dom';

export default function NavBar({ user }) {
  return (
    <nav>
      <div>Hello {user}!</div>
      <Link to="/">Movies List</Link>
      &nbsp; | &nbsp;
      <Link to="/actors">Actors List</Link>
    </nav>
  );
}