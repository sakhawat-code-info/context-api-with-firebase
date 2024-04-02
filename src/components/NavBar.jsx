import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log("Sign-out successful");
            }).catch((error) => {
                console.log(error, "from handle logout");
            });
    }

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl"><Link to='/'>Website</Link></a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>{user && <span>{user.email}</span>}</li>
                        {
                            !user && <>
                                <li><Link to='/register'>Register</Link></li>
                                <li><Link to='/login'>Login</Link></li>

                            </>
                        }
                        {
                            user && <>
                                <li><Link to='/order'>Order</Link></li>
                            </>
                        }

                        <li onClick={handleLogout}>Log Out</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;