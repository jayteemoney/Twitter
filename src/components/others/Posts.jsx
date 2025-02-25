import { useState } from "react";

import {
  ChatBubbleLeftEllipsisIcon,
  ArrowPathRoundedSquareIcon,
  HeartIcon,
  EyeIcon,
  BookmarkIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";


const Post = () => {
     // State Management
    const [likes, setLikes] = useState({});
    const [comments, setComments] = useState({});
    const [retweets, setRetweets] = useState({});
    const [showRetweetPopup, setShowRetweetPopup] = useState(null);
    const [showCommentBox, setShowCommentBox] = useState(null);
  
    // Handle Like Toggle
    const handleLikeToggle = (postId) => {
      setLikes((prev) => ({
        ...prev,
        [postId]: prev[postId] ? 0 : 1, // Toggles between like (1) and unlike (0)
      }));
    };
  
    // Handle Retweet Popup Toggle
    const handleRetweetClick = (postId) => {
      setShowRetweetPopup(showRetweetPopup === postId ? null : postId);
    };
  
    // Handle Retweet Selection
    const handleRetweetAction = (postId, type) => {
      setRetweets((prev) => ({
        ...prev,
        [postId]: (prev[postId] || 0) + 1, // Increments retweet count
      }));
      setShowRetweetPopup(null); // Close the retweet popup
      alert(`You selected ${type} for ${postId}`);
    };
  
    // Handle Comment Box Toggle
    const handleCommentClick = (postId) => {
      setShowCommentBox(showCommentBox === postId ? null : postId);
    };
  
    // Handle Comment Submission
    const handleCommentSubmit = (postId, comment) => {
      setComments((prev) => ({
        ...prev,
        [postId]: [...(prev[postId] || []), comment],
      }));
      setShowCommentBox(null); // Close the comment box
    };
  const posts = [
    {
      id: 1,
      user: "Aisha Muhammad Aliyu",
      handle: "@AishaMuhammad40",
      time: "8h",
      content:
        "PLSG ASSURES OF ENFORCEMENT OF TANKER CRASHES PREVENTIVE MEASURES\n\nThe Plateau State Government has reaffirmed its commitment to mitigating petroleum tanker and truck crashes, assuring of swift implementation and enforcement of preventive measures.\n\nThe Honorable Commissioner",
      profilePic: "/images/aisha.jpg", 
      postImage: "/images/post1.jpg",
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
      profilePic: "/images/john.jpg", 
      postImage: "/images/post2.png",
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
      profilePic: "/images/tech.jpg", // Unique profile picture
      postImage: "/images/post3.jpg",
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
      profilePic: "/public/images/fashion2.jpg", 
      postImage: "/images/post4.jpg",
      comments: 6,
      retweets: 12,
      likes: 35,
      views: 500,
    },
  ];
  
  return (
    <div className="bg-black text-white border-t border-gray-700">
      {posts.map((post) => (
        <div key={post.id} className="border-b border-gray-700 p-4 flex space-x-3">
          
          {/* Profile Picture */}
          <img
            src={post.profilePic}
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
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
            {post.postImage && (
              <div className="mt-2">
                <img
                  src={post.postImage}
                  alt="Post"
                  className="rounded-lg w-full object-cover"
                />
              </div>
            )}
            <div className="actions flex justify-between items-center text-gray-500 mt-2">
                  <button onClick={() => handleCommentClick(post.id, "comment")} className="flex items-center">
                    <ChatBubbleLeftEllipsisIcon className="w-5 h-5 hover:text-blue-500" />
                    <span className="ml-1">{comments[post.id] || 0}</span>
                  </button>
                  
                  <button onClick={() => handleRetweetClick(post.id, "retweet")} className="flex items-center">
                    <ArrowPathRoundedSquareIcon className="w-5 h-5 hover:text-green-600" />
                    <span className="ml-1">{retweets[post.id] || 0}</span>
                  </button>
                  
                  <button onClick={() => handleLikeToggle(post.id, "like")} className="flex items-center">
                    <HeartIcon className="w-5 h-5 hover:text-pink-500" />
                    <span className="ml-1">{likes[post.id] || 0}</span>
                  </button>

                  <button className="flex items-center space-x-1 text-gray-600">
                    <EyeIcon className="w-5 h-5 hover:text-blue-500" />
                    <small>1.5k</small>
                  </button>

                  <button className="text-gray-600">
                    <BookmarkIcon className="w-5 h-5 hover:text-blue-500" />
                  </button>

                  <button className="text-gray-600">
                    <ShareIcon className="w-5 h-5 hover:text-blue-500" />
                  </button>
                  {/* Retweet Popup */}
                  {showRetweetPopup === post.id && (
                    <div className="absolute top-6 left-0 w-[100px] bg-gray-800 text-white p-2 rounded-md shadow-md text-xs">
                      <button onClick={() => handleRetweetAction(post.id, "Retweet")} className="block w-full text-left hover:bg-gray-700 p-1">Retweet</button>
                      <button onClick={() => handleRetweetAction(post.id, "Quote")} className="block w-full text-left hover:bg-gray-700 p-1">Quote</button>
                    </div>
                  )}

                  {/* Comment Box */}
                  {showCommentBox === post.id && (
                    <div className="absolute top-8 left-0 w-full bg-gray-800 p-2 rounded-md shadow-md">
                      <textarea className="w-full p-1 bg-black text-white border border-gray-600 rounded-md" placeholder="Write a comment..."></textarea>
                      <button onClick={() => handleCommentSubmit(post.id, "Nice post!")} className="w-full mt-2 bg-blue-500 p-1 rounded-md">Comment</button>
                    </div>
                  )}
                </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
