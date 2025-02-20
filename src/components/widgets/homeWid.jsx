import { useState } from "react";
import { Link } from "react-router-dom";
import Following from "../others/following";
import Footer from "./footer";

const HomeWid = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    setIsSubscribed(true);
    alert("You have subscribed to premium!");
  };

  const trends = [
    { category: "Technology", title: "#knacking", posts: "20k posts" },
    { category: "Technology", title: "web3conference", posts: "100k posts" },
    { category: "Politics", title: "#jagaban", posts: "50k posts" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Fixed Search Bar */}
      <div className="fixed top-0 left-[885px] w-[340px] bg-black p-4 z-10">
        <input
          type="search"
          placeholder="Search here..."
          className="w-full p-2 rounded-[20px] border border-gray-600 "
        />
      </div>

      {/* Main Content Section */}
      <div className="w-[450px] flex-grow overflow-y-auto pt-[80px] pr-[140px]">
        {/* Subscribe Section */}
        <div className="bg-black shadow-md rounded-[20px] p-4 mb-4 border border-gray-600">
          <h3 className="text-lg font-semibold">Subscribe to Premium</h3>
          <p className="text-sm text-gray-600 mb-2">
            Subscribe to unlock new features and if eligible, receive a share of ads revenue.
          </p>
          <button
            onClick={handleSubscribe}
            className="bg-blue-500 text-white px-2 py-1 rounded-[20px] w-[90px] hover:bg-blue-600"
            disabled={isSubscribed}
          >
            {isSubscribed ? "Subscribed" : "Subscribe"}
          </button>
        </div>

        {/* Trends Section */}
        <div className="bg-black shadow-md border border-gray-600 rounded-[20px] p-4">
          <h2 className="text-xl font-semibold">Trends for You</h2>
          {trends.map((trend, index) => (
            <div key={index}>
              <Link to="/" className="block hover:bg-gray-900 p-2 rounded-[20px]">
                <h5 className="text-sm text-gray-500">{trend.category}. Trending</h5>
                <h3 className="text-lg font-semibold">{trend.title}</h3>
                <h5 className="text-sm text-gray-500">{trend.posts}</h5>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Following Section */}
      <div className="pr-[140px] overflow-y-auto">
        <Following />
      </div>

      {/* Footer Section */}
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default HomeWid;
