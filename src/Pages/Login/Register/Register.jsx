import { Link } from "react-router-dom";
import loginImage from "../../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password);

        createUser(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })

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
                            <h1 className="text-3xl font-bold text-center text-red-600 mb-5">Create an Account</h1>

                            <form onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Your email" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="Your password" className="input input-bordered" required />
                                </div>

                                <div className="form-control mt-6">
                                    <input type="submit" value="Sign Up" className="btn btn-outline bg-red-600 text-white" />
                                </div>
                            </form>

                            <p className="text-center mt-3">
                                Already have an account? Please, <Link to="/login" className="text-orange-500 font-bold">Log In</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;