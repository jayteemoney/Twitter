import { Link } from "react-router-dom";
import TrendingList from "../others/TrendingList";
import WhoToFollow from "../others/WhoToFollow";
import Navigation from "./Navigation";
import trendsData from "../others/TrendsData";
const Explore = () => {
  return (
    <div className="min-h-screen bg-black text-white flex justify-center">
      {/* Trends Container */}
      <div className="w-[550px] border-l border-r border-gray-600 bg-black">
        {/* Header Section */}
        <div className="sticky top-0 z-10 bg-black p-4 border-b border-gray-600">
          {/* Search Box */}
          <div className="mb-2">
            <input
              type="search"
              placeholder="Search here..."
              className="w-full p-2 rounded-lg bg-gray-900 text-white placeholder-gray-500 border border-gray-600 focus:outline-none"
            />
          </div>

          {/* Navigation */}
          <nav className="flex justify-around p-2">
            <Link
              to="/explore"
              className="text-white text-sm border-b-2 border-blue-500"
            >
              For You
            </Link>
            <Link
              to="/"
              className="text-white text-sm hover:border-b-2 hover:border-blue-500"
            >
              Trending Now
            </Link>
            <Link
              to="/explore"
              className="text-white text-sm hover:border-b-2 hover:border-blue-500"
            >
              News
            </Link>
            <Link
              to="/explore"
              className="text-white text-sm hover:border-b-2 hover:border-blue-500"
            >
              Sports
            </Link>
            <Link
              to="/explore"
              className="text-white text-sm hover:border-b-2 hover:border-blue-500"
            >
              Entertainment
            </Link>
          </nav>
        </div>

        {/* Trends Section */}
        <div className="mt-4 p-4 space-y-4">
          {trendsData.map((trend, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg transition-all"
            >
              <div className="flex-1">
                <h3 className="text-[15px] font-bold text-gray-300">
                  {trend.title}
                </h3>
                <div className="flex items-center text-gray-400 text-sm mt-1">
                  {/* Placeholder Icons for Profile Images */}
                  <div className="flex -space-x-2">
                    <img
                      src="/images/jay.jpg"
                      alt="User1"
                      className="w-5 h-5 rounded-full border border-black"
                    />
                    <img
                      src="/images/pic19.JPG"
                      alt="User2"
                      className="w-5 h-5 rounded-full border border-black"
                    />
                  </div>
                  <span className="ml-2">
                    {trend.time} • {trend.category} • {trend.posts}
                  </span>
                </div>
              </div>
              <img
                src={trend.imagePath}
                alt={trend.title}
                className="w-16 h-16 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        <div className="border-b border-gray-600 w-full"></div>
        <TrendingList />
        <div className="border-b border-gray-600 w-full"></div>
        <WhoToFollow />
        <Navigation />
      </div>
    </div>
  );
};

export default Explore;
