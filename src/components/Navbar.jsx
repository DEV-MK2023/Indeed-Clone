import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ loggedInUser, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);

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
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Link to="/">
            <img
              src="/logo2.png"
              alt="Job Portal"
              className="h-12 w-auto"
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}

        <div className="hidden md:flex items-center gap-8">

          {navLinks.map((link) => (

            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                `relative font-medium transition-colors duration-300 group ${isActive
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300 ${isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                      }`}
                  />
                </>
              )}
            </NavLink>

          ))}

          {!loggedInUser ? (

            <>

              <Link
                to="/register"
                className="
                px-4
                py-2
                rounded-lg
                border
                border-blue-600
                text-blue-600
                hover:bg-blue-50
                transition
                "
              >
                Register
              </Link>

              <Link
                to="/login"
                className="
                px-4
                py-2
                rounded-lg
                bg-blue-600
                text-white
                hover:bg-blue-700
                transition
                "
              >
                Login
              </Link>

            </>

          ) : (

            <button
              onClick={onLogout}
              className="
              px-4
              py-2
              rounded-lg
              bg-red-500
              text-white
              hover:bg-red-600
              transition
              "
            >
              Logout
            </button>

          )}

        </div>

        {/* Mobile Menu Button */}

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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="
            md:hidden
            bg-white/95
            backdrop-blur-xl
            border-t
            border-gray-200
            shadow-lg
            "
          >

            <div className="flex flex-col gap-4 px-6 py-5">

              {navLinks.map((link) => (

                <NavLink
                  key={link.name}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `font-medium transition ${isActive
                      ? "text-blue-600"
                      : "text-gray-700"
                    }`
                  }
                >
                  {link.name}
                </NavLink>

              ))}

              {!loggedInUser ? (

                <>

                  <Link
                    to="/register"
                    onClick={() => setMenuOpen(false)}
                    className="
                    text-center
                    border
                    border-blue-600
                    text-blue-600
                    py-2
                    rounded-lg
                    "
                  >
                    Register
                  </Link>

                  <Link
                    to="/login"
                    onClick={() => setMenuOpen(false)}
                    className="
                    text-center
                    bg-blue-600
                    text-white
                    py-2
                    rounded-lg
                    "
                  >
                    Login
                  </Link>

                </>

              ) : (

                <button
                  onClick={() => {
                    onLogout();
                    setMenuOpen(false);
                  }}
                  className="
                  bg-red-500
                  text-white
                  py-2
                  rounded-lg
                  "
                >
                  Logout
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