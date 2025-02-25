import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ChatBubbleLeftEllipsisIcon,
  ArrowPathRoundedSquareIcon,
  HeartIcon,
  EyeIcon,
  BookmarkIcon,
  ShareIcon,
  CameraIcon,
  PhotoIcon,
  ChartBarIcon,
  FaceSmileIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Home = () => {
    // State Management
  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState({});
  const [retweets, setRetweets] = useState({});
  const [showRetweetPopup, setShowRetweetPopup] = useState(null);
  const [showCommentBox, setShowCommentBox] = useState(null);
  const [emoji, setEmoji] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
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
    const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowDatePicker(false);
  };

  // Posts Data
  const posts = [
    {
      id: "post1",
      profilePic: "/images/aisha.jpg",
      author: "Big Brother Naija",
      username: "@BBnaija",
      content: "With Agent Ben's mission accomplished, Handi, Ozee, and Wanni are left hunting high and low for their missing crates of eggs.",
      hashtags: ["#BBNaija", "#BBNaijaS9"],
      videoSrc: "/images/Download (1).mp4",
    },
    {
      id: "post2",
      profilePic: "/images/aisha.jpg",
      author: "Colgate Nigeria",
      username: "@Colgate-ng",
      content: "Colgate task is LIVE TODAY!!! Follow @colgate_ng and stand a chance to win a 50k cash prize. Don't sleep on this one.",
      hashtags: ["#DoYangaWithYourSmile"],
      videoSrc: "/images/colgate.mp4",
    },
    {
      id: "post3",
      profilePic: "/images/aisha.jpg",
      author: "Tech Trends",
      username: "@TechTrends",
      content: "AI is evolving at a rapid pace! What are your thoughts on the future of artificial intelligence?",
    },
    {
      id: "post4",
      profilePic: "/images/aisha.jpg",
      author: "Motivation Daily",
      username: "@MotivateToday",
      content: "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
    },
    {
      id: "post5",
      profilePic: "/images/aisha.jpg",
      author: "Photography Hub",
      username: "@PhotoWorld",
      content: "Sunset at the beach. Nature's beauty is unmatched. 🌅",
      image: "/images/sunset.jpg",
    },
    {
      id: "post6",
      profilePic: "/images/aisha.jpg",
      author: "Fashion Weekly",
      username: "@FashionTrend",
      content: "Which outfit would you rock? 💃🔥",
      images: [
        "/images/fashion1.jpg",
        "/images/fashion2.jpg",
        "/images/fashion3.png",
        "/images/fashion4.avif",
      ],
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
    <div className="min-h-screen bg-black text-white flex justify-center items-center font-serif">
      <div className="relative w-[557px] mx-auto bg-black px-4 border-l border-r border-gray-600 pl-12">
        
        {/* Navigation */}
        <nav className="fixed top-0 left-[325px] w-[550px] bg-black z-10 flex justify-around border-b border-gray-600">
          <Link to="/" className="text-white font-bold border-b-4 border-blue-500">For You</Link>
          <Link to="/" className="text-white font-bold hover:border-b-4 border-blue-500">Following</Link>
        </nav>

        {/* Post Input */}
        <div className="pt-[60px] pb-[20px] overflow-y-auto">
          <div className="bg-black border border-gray-600 p-4 rounded-[20px] mb-10">
            <div className="flex items-center mb-4">
              <Link to="https://x.com/IrmiyaJeth79445">
                <img src="./images/jay.jpg" alt="profile" className="w-10 h-10 rounded-full" />
              </Link>
              <textarea className="ml-4 w-full p-2 rounded-lg resize-none text-white bg-black placeholder-gray-500 focus:outline-none" placeholder="What's happening?!"></textarea>
            </div>
            <div className="flex justify-between items-center">
              <div className="icons flex space-x-4 text-blue-400">
                <CameraIcon className="w-5 h-5 cursor-pointer" />
                <PhotoIcon className="w-5 h-5 cursor-pointer" />
                <ChartBarIcon className="w-5 h-5 cursor-pointer" />
                <FaceSmileIcon className="w-5 h-5 cursor-pointer" onClick={() => setEmoji("😊")} />
                {emoji && <span className="text-xl">{emoji}</span>}
                <CalendarDaysIcon className="w-5 h-5 cursor-pointer" onClick={() => setShowDatePicker(!showDatePicker)} />
                {showDatePicker && (
                  <DatePicker selected={selectedDate} onChange={handleDateChange} inline className="absolute bg-white text-black rounded-md shadow-lg" />
                )}
              </div>
              <button className="bg-gray-600 text-black px-4 py-1 rounded-[20px] hover:bg-gray-200">Post</button>
            </div>
          </div>

          {/* Posts */}
          {posts.map((post) => (
            <div key={post.id} className="mb-6 pb-6 border-b border-gray-600 last:border-none flex space-x-3">
                           {/* Profile Picture */}
               <img
                src={post.profilePic}
                alt="Profile"
                 className="w-10 h-10 rounded-full object-cover"
               />
              
              <div className="post bg-black border border-gray-600 p-4 rounded-[20px] text-[15px]">
                <div className="content mb-4">
                  <h3 className="font-bold">{post.author}</h3>
                  <p className="text-sm text-gray-400">{post.username}</p>
                  <p className="mt-2">{post.content}</p>
                </div>

                {post.videoSrc && (
                  <video ref={(el) => (videoRefs.current[post.id] = el)} data-id={post.id} src={post.videoSrc} controls muted loop className="w-full rounded-lg h-[400px]"></video>
                )}

                {post.image && <img src={post.image} alt="Post" className="w-full rounded-lg mb-4" />}
                {post.images && (
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {post.images.map((img, index) => (
                    <img key={index} src={img} alt={`Post ${index}`} className="w-full h-[200px] rounded-lg" />
                  ))}
                </div>
                )}
                
                {/* Actions */}
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

      </div>
    </div>
  );
};

export default Home;
