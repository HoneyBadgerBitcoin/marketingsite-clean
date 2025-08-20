import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Menu, X, Globe, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("EN");
  
  // Single state for which dropdown is open
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const languages = [
    { code: "EN", label: "English", region: "Canada" },
    { code: "ES", label: "Español", region: "United States" },
    { code: "FR", label: "Français", region: "Canada" },
    { code: "DE", label: "Deutsch", region: "Germany" },
  ];

  const navItems = [
    { label: "Buy", href: "#buy" },
    { label: "Sell", href: "#sell" },
  ];

  const atmItems = [
    { label: "Find an ATM", href: "#find-atm" },
    { label: "Host an ATM", href: "#host-atm" },
  ];

  const learnItems = [
    { label: "About us", href: "#about" },
    { label: "Blog", href: "#blog" },
    { label: "News", href: "#news" },
    { label: "Help Center", href: "#help" },
  ];

  return (
    <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 ${openDropdown ? '' : 'border-b border-gray-100'}`}
        style={{
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
        onMouseLeave={() => setOpenDropdown(null)}
      >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.webp" alt="HoneyBadger" className="h-10 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-primary-500 transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
            
            {/* ATMs Dropdown Button */}
            <button 
              className="flex items-center space-x-1 text-gray-700 hover:text-primary-500 transition-colors duration-200 font-medium"
              onMouseEnter={() => setOpenDropdown('atm')}
            >
              <span>ATMs</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            
            <a
              href="#support"
              className="text-gray-700 hover:text-primary-500 transition-colors duration-200 font-medium"
            >
              Support
            </a>
            
            {/* Learn Dropdown Button */}
            <button 
              className="flex items-center space-x-1 text-gray-700 hover:text-primary-500 transition-colors duration-200 font-medium"
              onMouseEnter={() => setOpenDropdown('learn')}
            >
              <span>Learn</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Switch Button */}
            <button 
              className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-primary-500 transition-colors duration-200 font-medium rounded-lg hover:bg-gray-50"
              onMouseEnter={() => setOpenDropdown('lang')}
            >
              <Globe className="h-4 w-4" />
              <span>{currentLanguage}</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            
            <button className="px-4 py-2 text-gray-700 hover:text-primary-500 transition-colors">
              Sign In
            </button>
            <button className="px-6 py-2 bg-dark-accent-400 text-white rounded-full hover:bg-dark-accent-500 hover:shadow-lg transition-all duration-300 font-medium">
              Find ATM
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden border-t border-gray-100 bg-white"
        >
          <div className="container-custom py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-primary-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            
            <div className="py-2 border-t border-gray-100 mt-4">
              <div className="text-sm font-medium text-gray-500 mb-2">ATMs</div>
              {atmItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-2 pl-4 text-gray-700 hover:text-primary-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
            
            <a
              href="#support"
              className="block py-2 text-gray-700 hover:text-primary-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Support
            </a>
            
            <div className="py-2 border-t border-gray-100 mt-4">
              <div className="text-sm font-medium text-gray-500 mb-2">Learn</div>
              {learnItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-2 pl-4 text-gray-700 hover:text-primary-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="py-2 border-t border-gray-100 mt-4">
              <div className="text-sm font-medium text-gray-500 mb-2">Language</div>
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => {
                    setCurrentLanguage(language.code);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-2 py-3 text-left rounded-lg transition-colors ${
                    currentLanguage === language.code
                      ? "bg-primary-50 text-primary-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <div>
                    <div className="font-medium">{language.label}</div>
                    <div className="text-sm text-gray-500">{language.region}</div>
                  </div>
                  {currentLanguage === language.code && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              ))}
            </div>

            <div className="flex flex-col space-y-2 mt-4">
              <button className="px-4 py-2 text-gray-700 hover:text-primary-500 transition-colors">
                Sign In
              </button>
              <button className="px-6 py-2 bg-dark-accent-400 text-white rounded-full hover:bg-dark-accent-500 hover:shadow-lg transition-all duration-300 font-medium">
                Find ATM
              </button>
            </div>
          </div>
        </motion.div>
      )}
      {/* Mega Dropdown Panels - Inside header for seamless effect */}
      {openDropdown && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="w-full border-b border-gray-100"
        >
          <div className="container-custom py-6">
            {/* ATMs Mega Content */}
            {openDropdown === 'atm' && (
              <div>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    ATM Services
                  </h3>
                  <p className="text-sm text-gray-600">
                    Find locations or learn about hosting opportunities
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {atmItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setOpenDropdown(null)}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 hover:border-primary-400 bg-white/60 hover:bg-white/80 text-gray-700 hover:text-gray-900 transition-all duration-200 shadow-sm hover:shadow-md"
                    >
                      <div className="text-left">
                        <div className="font-medium">{item.label}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Learn Mega Content */}
            {openDropdown === 'learn' && (
              <div>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Learn & Resources
                  </h3>
                  <p className="text-sm text-gray-600">
                    Discover more about cryptocurrency and our company
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {learnItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setOpenDropdown(null)}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 hover:border-primary-400 bg-white/60 hover:bg-white/80 text-gray-700 hover:text-gray-900 transition-all duration-200 shadow-sm hover:shadow-md"
                    >
                      <div className="text-left">
                        <div className="font-medium">{item.label}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Language Mega Content */}
            {openDropdown === 'lang' && (
              <div>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Language and region
                  </h3>
                  <p className="text-sm text-gray-600">
                    Choose your preferred language and region
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => {
                        setCurrentLanguage(language.code);
                        setOpenDropdown(null);
                      }}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-200 shadow-sm hover:shadow-md ${
                        currentLanguage === language.code
                          ? "border-primary-400 bg-primary-100 text-primary-700"
                          : "border-gray-200 hover:border-primary-400 bg-white/60 hover:bg-white/80 text-gray-700 hover:text-gray-900"
                      }`}
                    >
                      <div className="text-center">
                        <div className="font-semibold text-lg">
                          {language.code}
                        </div>
                      </div>
                      <div className="text-left">
                        <div className="font-medium">{language.label}</div>
                        <div className="text-sm opacity-70">
                          {language.region}
                        </div>
                      </div>
                      {currentLanguage === language.code && (
                        <div className="text-primary-600 ml-2">
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
