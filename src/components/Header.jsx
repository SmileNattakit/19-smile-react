import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="navbar bg-blue-500 ">
      <div className="flex-1">
        <a className="btn btn-ghost w-40 h-20 ">
          <img src="/logo.svg" alt="" />
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 items-center text-xl font-bold text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="flex flex-row items-center">
            <Link to="/owner">Owner</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
