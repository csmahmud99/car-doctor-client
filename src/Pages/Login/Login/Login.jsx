import { Link } from "react-router-dom";
import loginImage from "../../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Login = () => {
    const { signIn } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div>
            <div className="hero min-h-screen bg-base-200 pt-20 pb-20">
                <div className="hero-content flex-col lg:flex-row gap-20 max-w-6xl mx-auto">
                    <div className="w-1/2">
                        <img src={loginImage} alt="login-page-image" />
                    </div>
                    <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl font-bold text-center text-red-600 mb-5">Login to Your Account</h1>

                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Your email" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="Your password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>

                                <div className="form-control mt-6">
                                    <input type="submit" value="Sign In" className="btn btn-outline bg-red-600 text-white" />
                                </div>
                            </form>

                            <p className="text-center mt-3">
                                New to <strong className="text-red-600">Car Doctor</strong>? Please, <Link to="/register" className="text-orange-500 font-bold">Register</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;