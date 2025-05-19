import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
    // call your Supabase auth login function or backend logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-rice-husk-beige px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-dark-soil-brown mb-6 text-center font-headline">
          Mag-login sa iyong Account
        </h2>

        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block mb-1 text-dark-soil-brown font-medium">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-malunggay-green font-body"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-dark-soil-brown font-medium">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-malunggay-green font-body"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn w-full mt-4">
            Mag-login
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-dark-soil-brown font-body">
          Wala ka pang account?{" "}
          <Link
            to="/signup"
            className="text-malunggay-green font-semibold hover:underline"
          >
            Gumawa ng isa
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
