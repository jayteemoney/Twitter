import Footer from "./footer";
import { Link } from "react-router-dom";

const ExploreWid = () => {
  return (
    <div>
    <div className="min-h-screen bg-black text-white flex  pl-[20px]">
      {/* Sidebar Container */}
      <div className="w-[350px] bg-black p-4 space-y-6">
        {/* Search Form */}
     

        {/* Subscription Section */}
        <div className="article bg-gray-100 p-4 rounded-lg shadow-sm space-y-4 pl-[20px]">
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
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default ExploreWid;
