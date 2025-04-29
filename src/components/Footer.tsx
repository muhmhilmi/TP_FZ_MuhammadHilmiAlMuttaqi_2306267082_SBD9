import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-14 px-6 sm:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">mineworks</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Crafting beautiful digital experiences with a strong focus on user experience & functionality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white transition duration-300">Products</a></li>
              <li><a href="#counter" className="text-gray-400 hover:text-white transition duration-300">Counter Demo</a></li>
              <li><a href="#theme-demo" className="text-gray-400 hover:text-white transition duration-300">Theme Toggle</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-400 flex items-center gap-2"><Mail size={18} /> muhammadhilmi.almuttaqib@gmail.com</p>
            <p className="text-gray-400 flex items-center gap-2"><Phone size={18} /> +62 813-8684-4039</p>
            <p className="text-gray-400 flex items-center gap-2"><MapPin size={18} /> Jakarta, Indonesia</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400">© {new Date().getFullYear()} mineworks. All rights reserved.</p>
          <div className="mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300 mr-4">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;