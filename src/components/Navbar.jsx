import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ loggedInUser, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Nav links: always show Home, Remote Jobs, Company Reviews, Employers
  // Only show Saved Jobs and My Applications if user is logged in
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "RemoteJobsPage", href: "/remote-jobs" },
    { name: "companyReviews", href: "/company-review" },
    ...(loggedInUser
      ? [
          { name: "Saved Jobs", href: "/saved-jobs" },
          { name: "My Applications", href: "/applications" },
        ]
      : []),
    { name: "Employers / Post Job", href: "#" },
  ];

  return (
    <nav className="sticky w-full z-50 bg-white/90 backdrop-blur-md shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-blue-700 flex items-center gap-2"
        >
          <img src="/logo2.png" className="w-36 md:w-32" alt="Logo" />
        </motion.h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-blue-600 font-medium relative transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.name}
              <motion.span
                className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}

          {/* Auth Links */}
          {!loggedInUser ? (
            <>
              <motion.a
                href="/register"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Register
              </motion.a>
              <motion.a
                href="/login"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Login
              </motion.a>
            </>
          ) : (
            <button
              onClick={onLogout}
              className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors"
            >
              Logout ({loggedInUser.name || loggedInUser.email})
            </button>
          )}
        </div>

        {/* Hamburger */}
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
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
                  whileHover={{ x: 5 }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}

              {/* Auth Links Mobile */}
              {!loggedInUser ? (
                <>
                  <motion.a
                    href="/register"
                    className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
                    whileHover={{ x: 5 }}
                    onClick={() => setMenuOpen(false)}
                  >
                    Register
                  </motion.a>
                  <motion.a
                    href="/login"
                    className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
                    whileHover={{ x: 5 }}
                    onClick={() => setMenuOpen(false)}
                  >
                    Login
                  </motion.a>
                </>
              ) : (
                <button
                  onClick={() => {
                    onLogout();
                    setMenuOpen(false);
                  }}
                  className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors"
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
