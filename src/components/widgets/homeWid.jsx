import { useState } from "react";
import { Link } from "react-router-dom";
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
    <div>
    <div className="w-[480px] h-screen overflow-y-auto p-4 bg-black pl-[30px] pr-[120px]">
      {/* Search Form */}
      <div className="mb-4">
        <input
          type="search"
          placeholder="Search here..."
          className="w-full p-2 rounded-[20px] border border-gray-600"
        />
      </div>

      {/* Subscribe Section */}
      <div className="bg-black shadow-md rounded-[20px] p-4 mb-4 border border-gray-600">
        <h3 className="text-lg font-semibold">Subscribe to Premium</h3>
        <p className="text-sm text-gray-600 mb-2">
          Subscribe to unlock new features and if eligible, receive a share of ads revenue.
        </p>
        <button
          onClick={handleSubscribe}
          className="bg-blue-500 text-white px-2 py-2 rounded-[20px] w-[100px] hover:bg-blue-600"
          disabled={isSubscribed}
        >
          {isSubscribed ? "Subscribed" : "Subscribe"}
        </button>
      </div>

      {/* Trends Section */}
      <div className="bg-black shadow-md border border-gray-600 rounded-[20px] p-4">
        <h2 className="text-xl font-semibold mb-4">Trends for You</h2>
        {trends.map((trend, index) => (
          <div key={index} className="mb-4">
            <Link to="/" className="block hover:bg-gray-900 p-2 rounded-[20px]">
              <h5 className="text-sm text-gray-500">{trend.category}. Trending</h5>
              <h3 className="text-lg font-semibold">{trend.title}</h3>
              <h5 className="text-sm text-gray-500">{trend.posts}</h5>
            </Link>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </div>
    
  );
};

export default HomeWid;
