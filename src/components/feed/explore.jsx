import { Link } from "react-router-dom";

const trendsData = [
  { category: "Entertainment", tag: "#BBnaija", posts: "500k posts" },
  { category: "Technology", tag: "#knacking", posts: "20k posts" },
  { category: "Entertainment", tag: "RIPLEGEND", posts: "110k posts" },
  { category: "Entertainment", tag: "topher", posts: "500k posts" },
];

const Explore = () => {
  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center">
      {/* Trends Container */}
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[550px] h-full border-l border-r border-gray-600 bg-black p-1 overflow-y-auto">
        {/* Header Section */}
        <div className="sticky top-0 z-10 bg-black p-4">
          {/* Search Form */}
          <div className="mb-2">
            <input
              type="search"
              id="search-box"
              placeholder="Search here..."
              className="w-full p-2 rounded-lg bg-gray-900 text-white placeholder-gray-500 border border-gray-600 focus:outline-none"
            />
          </div>

          {/* Navigation */}
          <nav className="flex justify-around p-2 border-b border-gray-600">
            <Link to="/home" className="text-white text-sm border-b-2 border-blue-500">
              For You
            </Link>
            <Link to="/trending" className="text-white text-sm">
              Trending
            </Link>
            <Link to="/news" className="text-white text-sm">
              News
            </Link>
            <Link to="/sports" className="text-white text-sm">
              Sports
            </Link>
            <Link to="/entertainment" className="text-white text-sm">
              Entertainment
            </Link>
          </nav>
        </div>

        {/* Trends Section */}
        <div className="mt-4 p-4">
          {trendsData.map((trend, index) => (
            <div key={index} className="mb-4">
              <Link
                to={`/trends/${trend.tag.replace("#", "").toLowerCase()}`}
                className="block hover:bg-gray-800 p-2 rounded-lg transition-all"
              >
                <h5 className="text-gray-400">{trend.category}. Trending</h5>
                <h3 className="text-lg font-bold text-white">{trend.tag}</h3>
                <h5 className="text-gray-400">{trend.posts}</h5>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
