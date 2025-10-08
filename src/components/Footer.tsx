import {
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
        <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
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
            <div className="flex items-center space-x-3">
              <img src="/favicon.png" alt="Logo" className="h-12 w-auto" />
              <div className="text-blue-950 font-bold text-2xl">
                Swift Cart
              </div>
            </div>

            <p className="text-gray-600 mt-6 mb-3 text-sm sm:text-base">
              Follow Us
            </p>
            <div className="flex flex-wrap gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition cursor-pointer">
                <Facebook size={20} className="text-white" />
              </div>
              <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition cursor-pointer">
                <Twitter size={20} className="text-white" />
              </div>
              <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition cursor-pointer">
                <Linkedin size={20} className="text-white" />
              </div>
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition cursor-pointer">
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
            <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
              {[
                "About Us",
                "Career",
                "Contact Us",
                "Privacy Policy",
                "Othoba Certified",
                "Terms & Condition",
                "Next/Same day delivery TC",
              ].map((item, i) => (
                <li
                  key={i}
                  className="hover:text-blue-600 cursor-pointer transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* My Account Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4 font-serif">
              MY ACCOUNT
            </h3>
            <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
              {[
                "Sign In",
                "Orders",
                "Addresses",
                "My Wishlist",
                "Order History",
                "Track My Order",
              ].map((item, i) => (
                <li
                  key={i}
                  className="hover:text-blue-600 cursor-pointer transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4 font-serif">
              CUSTOMER SERVICE
            </h3>
            <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
              {[
                "Payment Methods",
                "Support Center",
                "How To Shop On Othoba",
                "Featured Recommendation",
                "Cancellation, Return & Refund",
              ].map((item, i) => (
                <li
                  key={i}
                  className="hover:text-blue-600 cursor-pointer transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-white border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-left">
          {/* Rights */}
          <span className="text-gray-600 text-sm">
            All rights reserved © swiftcart.com 2025
          </span>

          {/* Payment Methods */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <span className="text-gray-600 text-sm">
              We're using safe payment for
            </span>
            <div className="flex flex-wrap justify-center gap-2">
              {["bKash", "VISA", "MC", "AMEX", "M", "U"].map((item, i) => (
                <div
                  key={i}
                  className="w-12 h-8 bg-white border border-gray-300 rounded flex items-center justify-center"
                >
                  {item === "MC" ? (
                    <div className="flex space-x-0.5">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    </div>
                  ) : (
                    <span className="text-xs font-bold text-gray-700">
                      {item}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chat Button */}
      <button className="fixed bottom-8 right-6 w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition">
        <MessageCircle size={24} />
      </button>
    </div>
  );
};

export default FooterComponent;
