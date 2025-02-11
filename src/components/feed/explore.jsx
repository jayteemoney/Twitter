import { Link } from "react-router-dom";

const trendsData = [
  { category: "News", title: "Elon Musk’s DOGE Targets Federal Wealth Disparities", time: "21 hours ago", posts: "63K posts", imagePath: "/images/elon.jpg" },
  { category: "Entertainment", title: "BBNaija Drama: Housemates Clash Over Food", time: "12 hours ago", posts: "500K posts", imagePath: "/images/bbnaija.jpg" },
  { category: "Sports", title: "Cristiano Ronaldo Breaks Another Record", time: "8 hours ago", posts: "200K posts", imagePath: "/images/ronaldo.jpg" },
  { category: "Technology", title: "Apple Unveils Revolutionary AI Features", time: "15 hours ago", posts: "150K posts", imagePath: "/images/apple-ai.jpg" },
];

const Explore = () => {
  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center">
      {/* Trends Container */}
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[550px] h-full border-l border-r border-gray-600 bg-black p-1 overflow-y-auto">
        
        {/* Header Section */}
        <div className="sticky top-0 z-10 bg-black p-4">
          {/* Search Box */}
          <div className="mb-2">
            <input
              type="search"
              placeholder="Search here..."
              className="w-full p-2 rounded-lg bg-gray-900 text-white placeholder-gray-500 border border-gray-600 focus:outline-none"
            />
          </div>

          {/* Navigation */}
          <nav className="flex justify-around p-2 border-b border-gray-600">
            <Link to="/home" className="text-white text-sm border-b-2 border-blue-500">
              For You
            </Link>
            <Link to="/trending" className="text-white text-sm">Trending</Link>
            <Link to="/news" className="text-white text-sm">News</Link>
            <Link to="/sports" className="text-white text-sm">Sports</Link>
            <Link to="/entertainment" className="text-white text-sm">Entertainment</Link>
          </nav>
        </div>

        {/* Trends Section */}
        <div className="mt-4 p-4">
          {trendsData.map((trend, index) => (
            <div 
              key={index} 
              className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg transition-all"
            >
              <div className="flex-1">
                <h3 className="text-lg font-bold text-yellow-500">{trend.title}</h3>
                <div className="flex items-center text-gray-400 text-sm mt-1">
                  {/* Placeholder Icons for Profile Images */}
                  <div className="flex -space-x-2">
                    <img src="/images/user1.jpg" alt="User1" className="w-5 h-5 rounded-full border border-black" />
                    <img src="/images/user2.jpg" alt="User2" className="w-5 h-5 rounded-full border border-black" />
                  </div>
                  <span className="ml-2">{trend.time} • News • {trend.posts}</span>
                </div>
              </div>
              <img src={trend.imagePath} alt={trend.title} className="w-16 h-16 object-cover rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
