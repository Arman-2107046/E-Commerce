const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-blue-800 shadow-sm">
      {/* Left: Logo */}
      <div className="flex items-center space-x-4">
        <img
          src="/image.png"
          alt="Othoba Logo"
          className="h-8 w-auto"
        />
      </div>

      {/* Center: Search Bar */}
      <div className="flex-1 mx-4">
        <input
          type="text"
          placeholder="Search here..."
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Right: Icons */}
      <div className="flex items-center space-x-6 text-white">
        <div className="cursor-pointer">Sign In | Register</div>
        <div className="flex items-center space-x-4">
          <span className="cursor-pointer">Wishlist</span>
          <span className="cursor-pointer">Compare</span>
          <span className="cursor-pointer">Cart (0)</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
