
import { Link } from "react-router-dom";

const trendsData = [
  { category: "Entertainment", tag: "#BBnaija", posts: "500k posts" },
  { category: "Technology", tag: "#knacking", posts: "20k posts" },
  { category: "Entertainment", tag: "RIPLEGEND", posts: "110k posts" },
  { category: "Entertainment", tag: "topher", posts: "500k posts" },
  { category: "Entertainment", tag: "SOOJ", posts: "45k posts" },
  { category: "Entertainment", tag: "shuan", posts: "890k posts" },
  { category: "Entertainment", tag: "biggie", posts: "320k posts" },
  { category: "Technology", tag: "web3conference", posts: "100k posts" },
  { category: "Politics", tag: "#jagaban", posts: "50k posts" },
  { category: "Sports", tag: "Osimhen", posts: "270k posts" },
];

const Explore = () => {
  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center">
      {/* Trends Container */}
      <div className="trends-container mx-auto w-[850px] bg-black p-4 rounded-lg border-l-2 border-r-2 border-gray-600 pl-12">
        {/* Navigation */}
        <nav className="navigation flex justify-around mb-6 bg-black p-2 rounded-lg shadow-sm border-b-4 border-blue-500">
          <Link to="/home" className="text-blue-500 font-bold">
            For You
          </Link>
          <Link to="/trending" className="text-blue-500 font-bold">
            Trending
          </Link>
          <Link to="/news" className="text-blue-500 font-bold">
            News
          </Link>
          <Link to="/sports" className="text-blue-500 font-bold">
            Sports
          </Link>
          <Link to="/entertainment" className="text-blue-500 font-bold">
            Entertainment
          </Link>
        </nav>

        {/* Trends Section */}
        <div className="Trends">
          <h2 className="text-xl font-bold mb-4">Trends for you</h2>
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
