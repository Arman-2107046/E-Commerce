import {
  //   Mail,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  MessageCircle,
} from "lucide-react";

const FooterComponent = () => {
  return (
    <div className="w-full">
      {/* Main Footer */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img
              src="/othoba-logo.png"
              alt="Othoba"
              className="h-16 mb-4"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                if (e.currentTarget.nextElementSibling) {
                  (
                    e.currentTarget.nextElementSibling as HTMLElement
                  ).style.display = "block";
                }
              }}
            />
            <div className="flex flex-row items-center space-x-4">
              <div>
                {" "}
                <img src="/favicon.png" alt="Logo" className="h-12 w-auto" />
              </div>
              <div className="text-blue-950 font-bold text-2xl"> Swift Cart </div>
            </div>
            <br />
            {/* <p className="text-sm text-gray-600 mb-2">
              Got Question? Call us 9 AM- 10 PM
            </p>
            <p className="text-2xl font-bold text-gray-800 mb-4">
              09613-800800
            </p> */}
            <p className=" text-gray-600 mb-4">Follow Us</p>
            <div className="flex space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition">
                <Facebook size={20} className="text-white" />
              </div>
              <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-500 transition">
                <Twitter size={20} className="text-white" />
              </div>
              <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-800 transition">
                <Linkedin size={20} className="text-white" />
              </div>
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition">
                <Youtube size={20} className="text-white" />
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-gray-600">See our reviews on</span>
              <span className="flex items-center">
                <span className="text-green-500">★</span>
                <span className="font-semibold ml-1">Trustpilot</span>
              </span>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4 font-serif">
              COMPANY
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer transition">
                About Us
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition">
                Career
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition">
                Contact Us
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition">
                Privacy Policy
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition">
                Othoba Certified
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition">
                Terms & Condition
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition">
                Next/Same day delivery TC
              </li>
            </ul>
          </div>

          {/* My Account Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4 font-serif">
              MY ACCOUNT
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer transition">
                Sign In
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition">
                Orders
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition">
                Addresses
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition">
                My Wishlist
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition">
                Order History
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition">
                Track My Order
              </li>
            </ul>
          </div>

          {/* Customer Service Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4 font-serif">
              CUSTOMER SERVICE
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer transition">
                Payment Methods
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition">
                Support Center
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition">
                How To Shop On Othoba
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition">
                Featured Recommendation
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition">
                Cancellation, Return & Refund
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-white border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          {/* Store Badge */}
          <div className="flex items-center space-x-3">
            {/* <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-xs font-bold">1-99+</div>
                <div className="text-xs italic">Store</div>
              </div>
            </div> */}
            <span className="text-gray-600 text-sm">
              All rights reserved © swiftcart.com 2025
            </span>
          </div>

          {/* Payment Methods */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 text-sm">
              We're using safe payment for
            </span>
            <div className="flex items-center space-x-2">
              <div className="w-12 h-8 bg-white border border-gray-300 rounded flex items-center justify-center">
                <span className="text-red-600 font-bold text-xs">bKash</span>
              </div>
              <div className="w-12 h-8 bg-white border border-gray-300 rounded flex items-center justify-center">
                <span className="text-blue-800 font-bold text-xs">VISA</span>
              </div>
              <div className="w-12 h-8 bg-white border border-gray-300 rounded flex items-center justify-center">
                <div className="flex space-x-0.5">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                </div>
              </div>
              <div className="w-12 h-8 bg-white border border-gray-300 rounded flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xs">AMEX</span>
              </div>
              <div className="w-12 h-8 bg-white border border-gray-300 rounded flex items-center justify-center">
                <span className="text-orange-600 font-bold text-xs">M</span>
              </div>
              <div className="w-12 h-8 bg-white border border-gray-300 rounded flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xs">U</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Buttons */}
      {/* <button className="fixed bottom-8 right-8 w-14 h-14 bg-gray-800 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-700 transition">
        <ChevronUp size={24} />
      </button> */}

      <button className="fixed bottom-24 right-8 w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition">
        <MessageCircle size={24} />
      </button>
    </div>
  );
};

export default FooterComponent;
