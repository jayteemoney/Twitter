import { FaComment, FaRetweet, FaHeart, FaChartBar } from "react-icons/fa";

const posts = [
  {
    id: 1,
    user: "Aisha Muhammad Aliyu",
    handle: "@AishaMuhammad40",
    time: "8h",
    content:
      "PLSG ASSURES OF ENFORCEMENT OF TANKER CRASHES PREVENTIVE MEASURES\n\nThe Plateau State Government has reaffirmed its commitment to mitigating petroleum tanker and truck crashes, assuring of swift implementation and enforcement of preventive measures.\n\nThe Honorable Commissioner",
    image: "/images/post-image.jpg", 
    comments: 1,
    retweets: 3,
    likes: 7,
    views: 98,
  },
  {
    id: 2,
    user: "John Doe",
    handle: "@john_doe",
    time: "5h",
    content:
      "Excited to start my journey in React! Learning how to build components step by step. 🚀",
    image: "",
    comments: 2,
    retweets: 5,
    likes: 15,
    views: 120,
  },
  {
    id: 3,
    user: "Tech Updates",
    handle: "@techupdates",
    time: "2h",
    content:
      "Apple just announced the new M3 chip. More power, less battery drain! 🍏🔥",
    image: "/images/apple-m3.jpg",
    comments: 4,
    retweets: 10,
    likes: 20,
    views: 200,
  },
  {
    id: 4,
    user: "Jane Smith",
    handle: "@janesmith",
    time: "1h",
    content:
      "Nature is healing! Just took this stunning picture while hiking today. 🌿🌄",
    image: "/images/nature.jpg",
    comments: 6,
    retweets: 12,
    likes: 35,
    views: 500,
  },
];

const Post = () => {
  return (
    <div className="bg-black text-white border-t border-gray-700">
      {posts.map((post) => (
        <div
          key={post.id}
          className="border-b border-gray-700 p-4 flex space-x-3"
        >
          {/* Profile Picture */}
          <img
            src="/images/profile-pic.jpg" // Replace with actual profile pic
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />

          {/* Post Content */}
          <div className="w-full">
            {/* User Info */}
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span className="text-white font-semibold">{post.user}</span>
              <span>{post.handle}</span>
              <span>· {post.time}</span>
            </div>

            {/* Post Text */}
            <p className="text-white text-sm mt-1">{post.content}</p>

            {/* Post Image (if available) */}
            {post.image && (
              <div className="mt-2">
                <img
                  src={post.image}
                  alt="Post"
                  className="rounded-lg w-full object-cover"
                />
              </div>
            )}

            {/* Engagement Icons */}
            <div className="flex justify-between text-gray-400 text-xs mt-2">
              <div className="flex items-center space-x-1 hover:text-blue-500">
                <FaComment />
                <span>{post.comments}</span>
              </div>
              <div className="flex items-center space-x-1 hover:text-green-500">
                <FaRetweet />
                <span>{post.retweets}</span>
              </div>
              <div className="flex items-center space-x-1 hover:text-red-500">
                <FaHeart />
                <span>{post.likes}</span>
              </div>
              <div className="flex items-center space-x-1 hover:text-gray-300">
                <FaChartBar />
                <span>{post.views}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
