import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl"><Link to='/'>Website</Link></a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/register'>Register</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;