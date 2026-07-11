import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ loggedInUser, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Navigation Links
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Remote Jobs", href: "/remote-jobs" },
    { name: "Company Reviews", href: "/company-review" },
    ...(loggedInUser
      ? [
          { name: "Saved Jobs", href: "/saved-jobs" },
          { name: "My Applications", href: "/applications" },
        ]
      : []),
    { name: "Employers / Post Job", href: "#" },
  ];

  return (
    <nav className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/">
            <img
              src="/logo2.png"
              className="w-36 md:w-32"
              alt="Logo"
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) =>
            link.href === "#" ? (
              <span
                key={link.name}
                className="text-gray-400 cursor-not-allowed font-medium"
              >
                {link.name}
              </span>
            ) : (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={link.href}
                  className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors group"
                >
                  {link.name}

                  <span
                    className="
                      absolute
                      left-0
                      -bottom-1
                      h-[2px]
                      w-0
                      bg-blue-600
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />
                </Link>
              </motion.div>
            )
          )}

          {/* Auth Buttons */}
          {!loggedInUser ? (
            <>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/register"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  Register
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  Login
                </Link>
              </motion.div>
            </>
          ) : (
            <button
              onClick={onLogout}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Logout ({loggedInUser.name || loggedInUser.email})
            </button>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg rounded-b-xl overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) =>
                link.href === "#" ? (
                  <span
                    key={link.name}
                    className="text-gray-400 cursor-not-allowed font-medium"
                  >
                    {link.name}
                  </span>
                ) : (
                  <motion.div
                    key={link.name}
                    whileHover={{ x: 5 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                )
              )}

              {/* Mobile Auth */}
              {!loggedInUser ? (
                <>
                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      to="/register"
                      onClick={() => setMenuOpen(false)}
                      className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
                    >
                      Register
                    </Link>
                  </motion.div>

                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      to="/login"
                      onClick={() => setMenuOpen(false)}
                      className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
                    >
                      Login
                    </Link>
                  </motion.div>
                </>
              ) : (
                <button
                  onClick={() => {
                    onLogout();
                    setMenuOpen(false);
                  }}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Logout ({loggedInUser.name || loggedInUser.email})
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;