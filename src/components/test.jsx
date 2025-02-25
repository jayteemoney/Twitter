import { Link } from "react-router-dom";
import Post from "../others/Posts";

const Profile = () => {
  return (
    <div className="relative min-h-screen bg-black text-white border-l border-r border-gray-700 max-w-[560px] mx-auto">
      {/* Header */}
      <div className="sticky top-0 bg-black p-3 border-b border-gray-700">
        <h2 className="text-lg font-semibold">Jethro Irmiya</h2>
        <p className="text-sm text-gray-400">184 posts</p>
      </div>

      {/* Cover Photo */}
      <div className="relative w-full h-36 bg-gray-800">
        {/* Profile Picture */}
        <div className="absolute -bottom-10 left-4 w-24 h-24 border-4 border-black rounded-full overflow-hidden z-10">
          <img
            src="/images/jay.jpg"  
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Profile Details */}
      <div className="p-4 mt-10">
        {/* Edit Profile Button */}
        <div className="flex justify-end">
          <button className="border border-gray-500 px-4 py-1 rounded-full text-sm hover:bg-gray-800">
            Edit profile
          </button>
        </div>

        {/* Name and Username */}
        <h2 className="text-xl font-bold">Jethro Irmiya</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400">@dev_jaytee</span>
          <span className="bg-blue-500 text-xs px-2 py-1 rounded-full font-semibold">Get verified</span>
        </div>

        {/* Bio */}
        <p className="text-gray-400 text-sm mt-2">shift+1+enter</p>

        {/* Location & Join Date */}
        <div className="flex items-center text-gray-400 text-sm mt-2 gap-4">
          <span>📍 Jos, Nigeria</span>
          <span>📅 Joined March 2024</span>
        </div>

        {/* Follow Counts */}
        <div className="flex gap-4 mt-2 text-sm">
          <span><strong className="text-white">119</strong> Following</span>
          <span><strong className="text-white">49</strong> Followers</span>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-700 flex justify-between text-gray-400 text-sm px-4">
        {["Posts", "Replies", "Highlights", "Articles", "Media", "Likes"].map((tab, index) => (
          <Link
            key={index}
            to={`/profile/${tab.toLowerCase()}`}
            className={`py-3 flex-1 text-center ${
              tab === "Posts" ? "border-b-2 border-blue-500 text-white" : "hover:text-white"
            }`}
          >
            {tab}
          </Link>
        ))}
      </div>
      <Post/>

    </div>
  );
};

export default Profile;
