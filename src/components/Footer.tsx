import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Mail, Phone, MapPin, Github, Linkedin, Twitter, Facebook, Instagram, X } from 'lucide-react';
import logo from '../assets/logos/logo-light.png'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { name: 'Développement Web', path: '/services/web' },
      { name: 'Applications Mobiles', path: '/services/mobile' },
      { name: 'Design UI/UX', path: '/services/uiux' },
      { name: 'Graphisme', path: '/services/graphisme' },
    ],
    Entreprise: [
      { name: 'À propos', path: '/about' },
      { name: 'Portfolio', path: '/portfolio' },
      { name: 'Tarification', path: '/pricing' },
      { name: 'Contact', path: '/contact' },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/sprinter_agence_web?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', label: 'Instagram ' },
    { icon: Facebook, href: 'https://www.facebook.com/share/1A6wjHjCx5/', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: X, href: 'https://x.com/spinteragence?t=xwNxsDUFDOcMyaGZG1yqaQ&s=09', label: 'X' },
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <img
                src={logo}
                alt="Logo"
                className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-gray-400 text-lg mb-6 max-w-md">
              Sprinter, où l’innovation court plus vite que vos idées
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-red-500" />
                <span>contact@sprinter-agency.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-red-500" />
                <span>+237 681 418 674</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-red-500" />
                <span>Douala, Cameroun</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.Services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Entreprise</h3>
            <ul className="space-y-3">
              {footerLinks.Entreprise.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            © {currentYear} Sprinter Agency. Tous droits réservés.
          </p>

          {/* Social Links */}
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                className="p-2 text-gray-400 hover:text-white hover:bg-red-500 rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;