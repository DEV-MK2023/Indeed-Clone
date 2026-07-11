import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const links = [
    { title: "Company", items: ["About", "Careers", "Blog"] },
    { title: "Browse", items: ["Jobs", "Companies", "Salaries", "Remote Jobs"] },
    { title: "Support", items: ["Help Center", "Accessibility", "Privacy & Terms"] },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-4 gap-6">
        {/* Quick Links */}
        {links.map((section) => (
          <div key={section.title}>
            <h3 className="font-semibold text-sm mb-3">{section.title}</h3>
            <ul className="space-y-1 text-xs">
              {section.items.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Social & Info */}
        <div>
          <h3 className="font-semibold text-sm mb-3">Follow Us</h3>
          <div className="flex gap-3 mb-3">
            <a href="#" className="hover:text-blue-500 transition-colors"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-700 transition-colors"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-pink-500 transition-colors"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-3 text-center text-gray-500 text-xs">
        <p className="text-xs text-gray-500">© 2025 JobPortal. All rights reserved.</p>
        Made by <span className="font-medium">Muneeb</span>
      </div>
    </footer>
  );
};

export default Footer;
