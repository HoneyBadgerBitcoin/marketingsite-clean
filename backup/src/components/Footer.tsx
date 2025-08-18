import { Twitter, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Product: ['Buy Bitcoin', 'Sell Bitcoin', 'ATM Locations', 'Business Solutions'],
    Company: ['About Us', 'Blog', 'Careers', 'Press'],
    Support: ['Help Center', 'Contact Us', 'FAQ', 'Security'],
    Legal: ['Terms & Conditions', 'Privacy Policy', 'Compliance', 'FINTRAC'],
  };

  return (
    <footer className="bg-primary-900 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img 
                src="/logo.webp" 
                alt="HoneyBadger" 
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 mb-6">
              Canada's trusted platform for buying and selling digital assets.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-primary-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-primary-400" />
              <a href="mailto:support@badgercoin.com" className="text-gray-400 hover:text-primary-400">
                support@badgercoin.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-primary-400" />
              <span className="text-gray-400">1-855-499-1149</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-primary-400" />
              <span className="text-gray-400">Vancouver, BC</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 HoneyBadger Enterprises Ltd. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              FINTRAC #M20958584 | Revenu Québec #1225131500
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
