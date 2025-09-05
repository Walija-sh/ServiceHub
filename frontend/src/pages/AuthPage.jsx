import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { FaUser, FaPhone, FaLock, FaEnvelope } from "react-icons/fa";
import assets from "../assets/assets";

const AuthPage = ({mode}) => {
 // Also support query params like /auth?mode=signup
  const [searchParams] = useSearchParams();
  const queryMode = searchParams.get("mode") || mode || "login";

  const isSignup = queryMode === "signup";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      console.log("Signing up:", formData);
    } else {
      console.log("Logging in:", {
        email: formData.email,
        password: formData.password,
      });
    }
  };

  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-md flex flex-col md:flex-row max-w-4xl w-full overflow-hidden">
        {/* Left Side */}
        <div className="md:w-1/2 flex flex-col justify-center items-center p-8 ">
          <img
            src={assets.authImg}
            alt="auth illustration"
            className="w-3/4"
          />
          <h2 className="text-xl font-semibold mt-6">Join our community</h2>
          <p className="text-gray-600 text-center mt-2">
            Connect with trusted local service providers or start offering your
            own services to neighbors.
          </p>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-center mb-2">
            {isSignup ? "Create your account" : "Welcome back"}
          </h2>
          <p className="text-center text-gray-500 mb-6">
            {isSignup
              ? "Sign up as a customer to book services."
              : "Login to continue booking or managing your services."}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignup && (
              <>
                <div className="relative">
                  <FaUser className="absolute top-3 left-3 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                    required
                  />
                </div>

                <div className="relative">
                  <FaPhone className="absolute top-3 left-3 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                    required
                  />
                </div>
              </>
            )}

            <div className="relative">
              <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                required
              />
            </div>

            <div className="relative">
              <FaLock className="absolute top-3 left-3 text-gray-400" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                required
              />
            </div>

            {isSignup && (
              <div className="relative">
                <FaLock className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                  required
                />
              </div>
            )}

            {isSignup && (
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="mr-2 accent-orange-500"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the{" "}
                  <a href="/terms" className="text-orange-500 underline">
                    Terms & Privacy Policy
                  </a>
                </label>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition"
            >
              {isSignup ? "Create Account" : "Login"}
            </button>
          </form>

          <div className="text-center mt-4 text-sm">
            {isSignup ? (
              <p>
                Already have an account?{" "}
                <a
                  href="/auth?mode=login"
                  className="text-orange-500 font-medium"
                >
                  Login
                </a>
              </p>
            ) : (
              <p>
                Don’t have an account?{" "}
                <a
                  href="/auth?mode=signup"
                  className="text-orange-500 font-medium"
                >
                  Sign up
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage