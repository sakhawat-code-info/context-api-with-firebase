import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoutes = ({ children }) => {

    const { user, loader } = useContext(AuthContext)
    if (loader) {
        return (
            <div>
                <span className="loading loading-spinner loading-xs"></span>
                <span className="loading loading-spinner loading-sm"></span>
                <span className="loading loading-spinner loading-md"></span>
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        )
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login'></Navigate>
};
PrivateRoutes.propTypes = {
    children: PropTypes.node
};
export default PrivateRoutes;