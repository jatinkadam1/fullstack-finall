import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-10 mt-20 cursor-default">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-sm text-gray-800 text-center lg:text-left">
          <div>
            <h4 className="font-bold mb-4">Odoré</h4>
            <ul className="space-y-2">
              <li>Stores</li>
              <li>Franchises and Multibrands</li>
              <li>Work with us</li>
              <li>Institute-e</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Policies</h4>
            <ul className="space-y-2">
              <li>Delivery time</li>
              <li>Exchanges & Returns</li>
              <li>Payment methods</li>
              <li>Terms and conditions</li>
              <li>Privacy & Security</li>
              <li>Ethics and Sustainability</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">My account</h4>
            <ul className="space-y-2">
              <li>My orders</li>
              <li>My data</li>
              <li>My profile</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact us</h4>
            <ul className="space-y-2">
              <li>Call center</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Community</h4>
            <ul className="space-y-2">
              <li>Instagram</li>
              <li>Tiktok</li>
              <li>Facebook</li>
              <li>Vimeo</li>
              <li>Youtube</li>
              <li>Pinterest</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-600 text-xs">
          Design and Development by Odoré All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
