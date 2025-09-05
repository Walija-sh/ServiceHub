import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import assets from "../assets/assets";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../store/slices/authSlice";


const API_URL = "http://localhost:5000/api/auth"; // adjust if deployed

const AuthPage = ({ mode }) => {
  const [searchParams] = useSearchParams();
  const queryMode = searchParams.get("mode") || mode || "login";
  const isSignup = queryMode === "signup";
  const dispatch = useDispatch();
  const nav=useNavigate()

  const [formData, setFormData] = useState({ name: "", email: "" });
  const [step, setStep] = useState(1); // 1 = details, 2 = OTP
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (step === 1) {
        // Register or Login request
        const endpoint = isSignup ? `${API_URL}/register` : `${API_URL}/login`;
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const data = await res.json();

        if (!res.ok) throw new Error(data.message || "Something went wrong");

        setStep(2); // move to OTP step
      } else {
        // Verify OTP
        const res = await fetch(`${API_URL}/verify-otp`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ email: formData.email, code: otp }),
        });
        const data = await res.json();

        if (!res.ok) {
          // Reset to step 1 if OTP fails
          setStep(1);
          throw new Error(data.message || "OTP verification failed");
        }

        // TODO: Save user in Redux
        // after OTP verify success:
dispatch(loginSuccess({ email: formData.email })); 
        console.log("Login success:", data);
        nav('/')
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-md flex flex-col md:flex-row md:items-center max-w-4xl w-full overflow-hidden relative">
        {/* Left Side */}
        <div className="md:w-1/2 flex flex-col justify-center items-center p-8">
          <img src={assets.authImg} alt="auth illustration" className="w-3/4" />
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

          {step === 1 ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {isSignup && (
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

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition disabled:opacity-50"
              >
                {loading
                  ? "Sending..."
                  : isSignup
                  ? "Send OTP & Register"
                  : "Send OTP"}
              </button>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <FaLock className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="text"
                  name="otp"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold transition disabled:opacity-50"
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
            </form>
          )}

          {/* Switch between login/signup */}
          <p className="text-center mt-4 text-sm">
            {isSignup ? (
              <>
                Already have an account?{" "}
                <Link to="/auth?mode=login" className="text-orange-500 font-medium">
                  Login
                </Link>
              </>
            ) : (
              <>
                Don’t have an account?{" "}
                <Link to="/auth?mode=signup" className="text-orange-500 font-medium">
                  Sign up
                </Link>
              </>
            )}
          </p>
        </div>

        {/* Error Modal */}
        {error && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
              <h3 className="text-lg font-bold text-red-600 mb-2">Error</h3>
              <p className="text-gray-700 mb-4">{error}</p>
              <button
                onClick={() => setError("")}
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
