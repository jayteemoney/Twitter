
import { Link } from "react-router-dom";

const ExploreWid = () => {
  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center">
      {/* Sidebar Container */}
      <div className="explore-container w-[350px] bg-black p-4 rounded-lg border-l-2 border-r-2 border-gray-600 space-y-6">
        {/* Search Form */}
        <div className="search-form">
          <input
            type="search"
            id="search-box"
            placeholder="Search here..."
            className="w-full p-2 rounded-lg bg-gray-900 text-white placeholder-gray-500 border border-gray-600 focus:outline-none"
          />
        </div>

        {/* Subscription Section */}
        <div className="article bg-gray-800 p-4 rounded-lg shadow-sm space-y-4">
          <h3 className="text-lg font-bold">Subscribe to Premium</h3>
          <p className="text-gray-400">
            Subscribe to unlock new features and, if eligible, receive a share
            of ad revenue.
          </p>
          <Link to="/subscribe">
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all">
              Subscribe
            </button>
          </Link>
        </div>

        {/* Footer Section */}
        <footer className="footer text-gray-500">
          <div className="notes space-y-2">
            <Link
              to="/terms"
              className="block text-sm hover:underline transition-all"
            >
              Terms of Services
            </Link>
            <Link
              to="/privacy"
              className="block text-sm hover:underline transition-all"
            >
              Privacy Policy
            </Link>
            <Link
              to="/cookies"
              className="block text-sm hover:underline transition-all"
            >
              Cookies Policy
            </Link>
            <Link
              to="/accessibility"
              className="block text-sm hover:underline transition-all"
            >
              Accessibility
            </Link>
            <Link
              to="/ads-info"
              className="block text-sm hover:underline transition-all"
            >
              Ads Info
            </Link>
            <Link
              to="/more"
              className="block text-sm hover:underline transition-all"
            >
              More
            </Link>
          </div>
          <div className="credit text-sm mt-4">
            Created by <span className="font-bold">Jaytee</span> | All rights
            reserved
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ExploreWid;
