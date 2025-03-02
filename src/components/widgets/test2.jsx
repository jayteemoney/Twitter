import { useState, useEffect, useRef } from "react";

import {
  ChatBubbleLeftEllipsisIcon,
  ArrowPathRoundedSquareIcon,
  HeartIcon,
  EyeIcon,
  BookmarkIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";


const Posts = () => {
     // State Management
    const [likes, setLikes] = useState({});
    const [comments, setComments] = useState({});
    const [retweets, setRetweets] = useState({});
    const [showRetweetPopup, setShowRetweetPopup] = useState(null);
    const [showCommentBox, setShowCommentBox] = useState(null);
    const videoRefs = useRef({});
  
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
      user: "Big Brother Naija",
      handle: "@BBNaija",
      time: "8h",
      content:
        "With Agent Ben's mission accomplished, Handi, Ozee, and Wanni are left hunting high and low for their missing crates of eggs.",
      profilePic: "/images/aisha.jpg",
      videoSrc: "/images/Download (1).mp4",
      comments: 1,
      retweets: 3,
      likes: 7,
      views: 98,
    },
    {
      id: 2,
      user: "Colgate Nigeria",
      handle: "@Colgate_ng",
      time: "5h",
      content:
        "Colgate task is LIVE TODAY!!! Follow @colgate_ng and stand a chance to win a 50k cash prize. Don't sleep on this one. 🚀",
      profilePic: "/images/john.jpg", 
      videoSrc: "/images/colgate.mp4",
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
    {
        id: 5,
        user: "Photography Hub",
        handle: "@photoworld",
        time: "2h",
        content:
          "Sunset at the beach. Nature's beauty is unmatched. 🌅",
        profilePic: "/images/fashion2.jpg", 
        postImage: "/images/sunset.jpg",
        comments: 6,
        retweets: 12,
        likes: 35,
        views: 500,
    },
    {
        id: 6,
        user: "Fashion weekly",
        handle: "@FashionTrend",
        time: "1h",
        content:
          "Which outfit would you rock? 💃🔥",
        profilePic: "/public/images/fashion2.jpg", 
        postImages: 
        [
          "/images/fashion1.jpg",
          "/images/fashion2.jpg",
          "/images/fashion3.png",
          "/images/fashion4.avif",
        ],
        comments: 6,
        retweets: 12,
        likes: 35,
        views: 500,
    },
  ];
  // Auto Play Videos on Scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = videoRefs.current[entry.target.dataset.id];
          if (video) {
            entry.isIntersecting ? video.play() : video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(videoRefs.current).forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);

  
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
            
            {post.videoSrc && (
                  <video ref={(el) => (videoRefs.current[post.id] = el)} data-id={post.id} src={post.videoSrc} controls muted loop className="w-full rounded-lg h-[500px]"></video>
            )}
            {post.postImages && (
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {post.postImages.map((img, index) => (
                    <img key={index} src={img} alt={`Post ${index}`} className="w-full h-[200px] rounded-lg" />
                  ))}
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
  <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
    <div className="bg-[#15181c] text-white w-[90%] max-w-lg rounded-lg shadow-lg p-4 relative">
      {/* Close Button */}
      <button
        onClick={() => setShowCommentBox(null)}
        className="absolute top-2 left-2 text-gray-400 hover:text-white"
      >
        ✕
      </button>

      {/* Post Information */}
      <div className="flex items-start space-x-3">
        <img
          src={post.profilePic}
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex-1">
          <p className="text-gray-400 text-sm">
            Replying to <span className="text-blue-400">@{post.handle}</span>
          </p>
          <p className="text-white">{post.content}</p>
        </div>
      </div>

      {/* Comment Input Box */}
      <div className="mt-3">
        <textarea
          className="w-full p-2 bg-black text-white border border-gray-700 rounded-md resize-none"
          placeholder="Post your reply"
          rows="3"
        ></textarea>
      </div>

      {/* Reply Button */}
      <div className="flex justify-end mt-3">
        <button
          onClick={() => handleCommentSubmit(post.id, "Nice post!")}
          className="bg-blue-500 px-4 py-2 rounded-md text-white font-bold"
        >
          Reply
        </button>
      </div>
    </div>
  </div>
)}

                </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
