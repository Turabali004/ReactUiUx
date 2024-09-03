import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-24 fon mt-20 lg:text-xl leading-relaxed font-light px-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 overflow-hidden">
        
        {/* Logo and Description */}
        <div>
          <h2 className="text-3xl font-bold mb-4 overflow-hidden">LOGO</h2>
          <p className="text-sm overflow-hidden">
            Lorem ipsum dolor sit amet consectetur. Laoreet cras egestas.
            Lorem ipsum dolor sit amet consectetur. Laoreet cras egestas.
            Lorem ipsum dolor sit amet consectetur. Laoreet cras egestas.
            Lorem ipsum dolor sit amet consectetur. Laoreet cras egestas.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-lg mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li className='overflow-hidden'><Link to="/services/web-development">Web Development</Link></li>
            <li className='overflow-hidden'><Link to="/services/ui-ux-design">UI/UX Design</Link></li>
            <li className='overflow-hidden'><Link to="/services/graphic-design">Graphic Design</Link></li>
            <li className='overflow-hidden'><Link to="/services/business-planning">Business Planning</Link></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li className='overflow-hidden'><Link to="/lorem">Lorem</Link></li>
            <li className='overflow-hidden'><Link to="/contact">Contact Us</Link></li>
            <li className='overflow-hidden'><Link to="/lorem-ipsum">Lorem Ipsum</Link></li>
            <li className='overflow-hidden'><Link to="/testimonials">Testimonials</Link></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className='flex flex-col'>

          <h3 className="font-bold text-lg">Follow Us</h3>

          <div className="flex justify-between flex-row">
            <div>
            <Link to="#" className="text-xl">
              <img src="https://via.placeholder.com/24/FB3958/FFFFFF?text=I" alt="Instagram" className="w-6 h-6" />
            </Link>
            <Link to="#" className="text-xl">
              <img src="https://via.placeholder.com/24/1877F2/FFFFFF?text=F" alt="Facebook" className="w-6 h-6" />
            </Link>
            <Link to="#" className="text-xl">
              <img src="https://via.placeholder.com/24/0A66C2/FFFFFF?text=L" alt="LinkedIn" className="w-6 h-6" />
            </Link>
            </div>
            <div>
            <Link to="#" className="text-xl">
              <img src="https://via.placeholder.com/24/1DA1F2/FFFFFF?text=T" alt="Twitter" className="w-6 h-6" />
            </Link>
            <Link to="#" className="text-xl">
              <img src="https://via.placeholder.com/24/FF0000/FFFFFF?text=Y" alt="YouTube" className="w-6 h-6" />
            </Link>
            <Link to="#" className="text-xl">
              <img src="https://via.placeholder.com/24/1769FF/FFFFFF?text=B" alt="Behance" className="w-6 h-6" />
            </Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
