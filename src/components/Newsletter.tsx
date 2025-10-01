// import { Mail } from "lucide-react";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <div className="bg-gray-800 text-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-4xl  tracking-tight mb-3">
              Stay Updated
            </h2>
            <p className="text-neutral-400 text-sm">
              Exclusive offers and updates delivered to your inbox
            </p>
          </div>

          {/* Right Form */}
          <div className="flex-1">
            <div className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 w-[20rem] bg-white border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 transition"
              />
              <button
                onClick={handleSubmit}
                className="px-8 py-3  bg-gray-200 text-black font-medium rounded-lg hover:bg-neutral-200 transition"
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