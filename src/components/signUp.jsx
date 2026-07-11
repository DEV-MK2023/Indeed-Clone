import { motion } from "framer-motion";
// import logo from "../assets/logo2.png"


export default function SignupPage() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full"
      >
        <h1 className="text-2xl font-bold text-center mb-4 text-blue-600"><img src="/logo2.png" className="w-32 mx-auto" alt="" /></h1>
        <p className="text-center text-gray-600 mb-4">Ready to take the next step?</p>
        <p className="text-sm text-gray-500 text-center mb-6">
          By creating an account or signing in, you agree to Indeed’s Terms, Cookie, and Privacy policies.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="w-full bg-gray-800 text-white py-2 rounded-lg mb-3 hover:bg-gray-700"
        >
          Continue with Google
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="w-full bg-black text-white py-2 rounded-lg mb-3 hover:bg-gray-900"
        >
          Continue with Apple
        </motion.button>

        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-3 text-sm text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <input
          type="email"
          placeholder="Email address"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 mb-4"
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500"
        >
          Continue
        </motion.button>
      </motion.div>
    </div>
  );
}
