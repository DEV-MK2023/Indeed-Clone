import { useState } from "react";
import { motion } from "framer-motion";

const Login = ({ onLogin }) => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === form.email && u.password === form.password
    );
    if (!user) {
      alert("Invalid credentials!");
      return;
    }
    sessionStorage.setItem("loggedInUser", JSON.stringify(user));
    alert(`Welcome back, ${user.name}!`);
    onLogin(user); // update app state
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 bg-white backdrop-blur-md rounded-3xl shadow-2xl border"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Login to Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Floating Labels */}
          {["email", "password"].map((field) => (
            <div key={field} className="relative">
              <input
                type={field}
                name={field}
                value={form[field]}
                onChange={handleChange}
                placeholder=" "
                required
                className="peer w-full border border-blue-300 rounded-xl px-4 py-3 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
              <label
                htmlFor={field}
                className="absolute left-4 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-blue-600 peer-focus:text-sm"
              >
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
            </div>
          ))}

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Login
          </motion.button>
        </form>

        <p className="mt-6 text-center text-gray-500 text-sm">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-blue-600 font-semibold hover:underline"
          >
            Register here
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
