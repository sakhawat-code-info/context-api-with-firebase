import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen gap-6">
            <p className="text-7xl">404</p>
            <p><Link to='/' className="btn btn-link">Go Home</Link></p>
        </div>
    );
};

export default ErrorPage;