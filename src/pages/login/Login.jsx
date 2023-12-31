import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "/src/contexts/AuthContext";
import Navbar from "../../layouts/Navbar";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { signin, isLoggedIn } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) setError("All fields must be filled!");

    try {
      setError("");
      setIsLoading(true);
      await signin(email, password);
      navigate("/app");
    } catch {
      setIsLoading(false);
      setError("Failed to log in. Please try again!");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    isLoggedIn && navigate("/app");
  }, [isLoggedIn, navigate]);

  return (
    <>
      <Navbar bg="bg-gray-800" textColor="text-blue-400" logoBlue={true} />
      {/* Body */}
      <div className="min-h-screen bg-gray-800 overflow-y-hidden">
        <div className="relative w-screen">
          <div className="flex flex-col max-w-lg  rounded-2xl p-10 w-full bg-gray-800 text-blue-400 mx-auto mt-20">
            {/* Title */}
            <div className="mb-8 text-center">
              <h1 className="my-3 text-4xl font-bold">Sign in</h1>
              <p className="text-sm text-gray-400">
                Sign in to access your account
              </p>
            </div>
            {error && <p className="p-5 text-center text-red-500">{error}</p>}
            {/* Form */}
            <form className="space-y-12" onSubmit={handleSubmit}>
              <div className="space-y-4">
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="mail@example.com"
                    className="w-full px-3 py-2 border rounded-md border-blue-200 bg-gray-700 "
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {/* Password */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="password" className="text-sm">
                      Password
                    </label>
                    <a className="text-xs hover:underline dark:text-gray-400">
                      Forgot password?
                    </a>
                  </div>
                  <input
                    type="password"
                    name="password"
                    placeholder="*****"
                    className="w-full px-3 py-2 border rounded-md border-blue-200 bg-gray-700 "
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              {/* CTA */}
              <div className="space-y-2">
                <div>
                  {/* Submit */}
                  <button
                    disabled={isLoading}
                    type="submit"
                    className="w-full px-8 py-3 font-semibold rounded-md border-2 border-blue-400"
                  >
                    Sign in
                  </button>
                </div>
                {/* Register */}
                <p className="px-6 text-sm text-center">
                  Don&apos;t have an account yet?
                  <Link to="/signup">Sign up.</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
