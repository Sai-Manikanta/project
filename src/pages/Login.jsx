import { useState } from 'react';
import { Link } from 'react-router-dom';
import QuotesSlider from './../components/QuotesSlider';
import GoogleIcon from './../components/GoogleIcon';
import OtpVerification from './../components/OtpVerification';
import girlWithCap from './../assets/images/girl-with-cap.avif';

function Login() {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });
    const [openOtpModal, setOpenOtpModal] = useState(false);

    const handleInputChange = e => {
        setLoginData(data => ({
            ...data,
            [e.target.name]: e.target.value
        }));
    }

    const handleSubmit = e => {
        e.preventDefault();

        /// Send date to server
        console.log(loginData);
        /// if otp successfully send
        setOpenOtpModal(true);
    }

    const { email, password } = loginData;

    return (
        <div className="h-screen grid grid-cols-2">
            <div className="col-span-2 md:col-span-1 grow bg-gray-100 p-8 sm:pl-16 md:pl-28 lg:pl-32 flex justify-end items-center">
                <div className="grow">
                    <h1 className="text-2xl font-medium">Welcome Back</h1>
                    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg mt-4">
                        <div>
                            <label htmlFor="#" className="block">Email Address</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                                value={email}
                                className="w-full bg-gray-100 px-4 py-3 rounded-lg mt-3 text-sm focus:outline-none"
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mt-5">
                            <label htmlFor="#" className="block">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your Password"
                                name="password"
                                value={password}
                                className="w-full bg-gray-100 px-4 py-3 rounded-lg mt-3 text-sm focus:outline-none"
                                onChange={handleInputChange}
                                minLength="8"
                                required
                            />
                        </div>
                        <p className="mt-4 text-end"><a href="#">Forgot Password?</a></p>
                        <button type="submit" className="w-full bg-teal-700 py-2 rounded-lg text-white mt-4">Log In</button>
                        <button type="button" className="flex justify-center items-center w-full border-2 border-teal-700 text-teal-700 py-1 rounded-lg mt-4">
                            <GoogleIcon width={30} height={30} />
                            <span className="ml-2 text-sm">Log In With Google</span>
                        </button>
                        <p className="text-center mt-8 text-sm text-gray-500">
                            Don't have An Account?
                            <Link to="/signup" className="text-teal-700 ml-2">Create Account</Link>
                        </p>
                    </form>
                </div>
            </div>
            {/* Right Box */}
            <div
                className="grow hidden md:grid items-end bg-cover bg-bottom"
                style={{ backgroundImage: `url(${girlWithCap})` }}>
                <QuotesSlider />
            </div>
            {openOtpModal && <OtpVerification open={openOtpModal} setOpenpModal={setOpenOtpModal} />}
        </div>
    )
}

export default Login