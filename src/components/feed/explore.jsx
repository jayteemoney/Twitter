
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
      <div className="trends-container mx-auto w-[550px] bg-black p-4 rounded-lg border-l-1 border-r-1 border-gray-600 pl-12">
        {/* Navigation */}
        <div className="search-form">
          <input
            type="search"
            id="search-box"
            placeholder="Search here..."
            className="w-full p-2 rounded-lg bg-gray-900 text-white placeholder-gray-500 border border-gray-600 focus:outline-none"
          />
        </div>
        <nav className="navigation flex justify-around mb-6 bg-black p-2 ">
          <Link to="/home" className="text-white font-bold border-b-3 border-blue-500">
            For You
          </Link>
          <Link to="/trending" className="text-white font-bold">
            Trending
          </Link>
          <Link to="/news" className="text-white font-bold">
            News
          </Link>
          <Link to="/sports" className="text-white font-bold">
            Sports
          </Link>
          <Link to="/entertainment" className="text-white font-bold">
            Entertainment
          </Link>
        </nav>

        {/* Trends Section */}
        <div className="Trends">
          {trendsData.map((trend, index) => (
            <div key={index}>
              {index > 0 && <hr className="border-t border-gray-600 my-4" />}
              <Link
                to={`/trends/${trend.tag.replace("#", "").toLowerCase()}`}
                className="block mb-4 hover:bg-gray-800 p-2 rounded-lg transition-all"
              >
                <h5 className="text-gray-400">{trend.category}. Trending</h5>
                <h3 className="text-lg font-bold text-blue-500">{trend.tag}</h3>
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
