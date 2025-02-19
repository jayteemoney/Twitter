const trends = [
    { category: "Trending", title: "Messi", posts: "85.4K posts" },
    { category: "Trending in Nigeria", title: "Providus", posts: "1,095 posts" },
    { category: "Sports · Trending", title: "Mbappe", posts: "270K posts" },
    { category: "Music · Trending", title: "Burna", posts: "54.3K posts" },
    { category: "Trending in Football", title: "#PSVJuve", posts: "5,724 posts" },
  ];
  
  const TrendingList = () => {
    return (
      <div className="w-[350px] bg-black text-white p-4 space-y-4">
        {trends.map((trend, index) => (
          <div 
            key={index} 
            className="hover:bg-gray-900 p-2 rounded-lg transition duration-200 cursor-pointer flex items-center"
          >
            {/* Left Content */}
            <div className="flex-1">
              <h5 className="text-xs text-gray-500">{trend.category}</h5>
              <h3 className="text-[15px] font-semibold">{trend.title}</h3>
              <h5 className="text-xs text-gray-500">{trend.posts}</h5>
            </div>
  
            {/* Right Button (Aligned to Edge) */}
            <button className="text-gray-500 hover:text-gray-300 ml-auto">
              •••
            </button>
          </div>
        ))}
      </div>
    );
  };
  
  export default TrendingList;
  