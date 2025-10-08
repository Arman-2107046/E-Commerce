import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <div className="bg-gray-800 text-white py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2">
              Stay Updated
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base">
              Exclusive offers and updates delivered to your inbox
            </p>
          </div>

          {/* Right Form */}
          <div className="flex-1 w-full">
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 bg-white text-black placeholder-neutral-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
              />
              <button
                onClick={handleSubmit}
                className="px-6 py-3 bg-gray-200 text-black font-medium rounded-lg hover:bg-gray-300 transition"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
