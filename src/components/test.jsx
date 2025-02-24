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
  const [likes, setLikes] = useState({ post1: 478, post2: 478 });
  const [comments, setComments] = useState({ post1: 15, post2: 15 });
  const [retweets, setRetweets] = useState({ post1: 10, post2: 10 });
  const [emoji, setEmoji] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const videoRefs = useRef({});

  const handleStatChange = (post, statType) => {
    if (statType === "like") {
      setLikes((prev) => ({ ...prev, [post]: prev[post] + 1 }));
    } else if (statType === "comment") {
      setComments((prev) => ({ ...prev, [post]: prev[post] + 1 }));
    } else if (statType === "retweet") {
      setRetweets((prev) => ({ ...prev, [post]: prev[post] + 1 }));
    }
  };

  const handleEmojiSelect = (emoji) => {
    setEmoji(emoji);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowDatePicker(false);
  };

  const posts = [
    {
      id: "post1",
      author: "Big Brother Naija",
      username: "@BBnaija",
      content:
        "With Agent Ben's mission accomplished, Handi, Ozee, and Wanni are left hunting high and low for their missing crates of eggs.",
      hashtags: ["#BBNaija", "#BBNaijaS9"],
      videoSrc: "/images/Download (1).mp4",
      stats: {
        comments: comments.post1,
        retweets: retweets.post1,
        likes: likes.post1,
      },
    },
    {
      id: "post2",
      author: "Colgate Nigeria",
      username: "@Colgate-ng",
      content:
        "Colgate task is LIVE TODAY!!! Follow @colgate_ng and stand a chance to win a 50k cash prize. Don't sleep on this one.",
      hashtags: ["#DoYangaWithYourSmile"],
      videoSrc: "/images/colgate.mp4",
      stats: {
        comments: comments.post2,
        retweets: retweets.post2,
        likes: likes.post2,
      },
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = videoRefs.current[entry.target.dataset.id];
          if (video) {
            if (entry.isIntersecting) {
              video.play();
            } else {
              video.pause();
            }
          }
        });
      },
      { threshold: 0.5 } // Trigger when at least 50% of the video is in view
    );

    Object.values(videoRefs.current).forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center font-serif">
      <div className="relative w-[557px] mx-auto bg-black px-4 border-l border-r border-gray-600 pl-12">
        {/* Fixed Navigation */}
        <nav className="fixed top-0 left-[325px] w-[550px] bg-black z-10 p-2 flex justify-around border-b border-gray-600">
          <Link to="/" className="text-white font-bold border-b-4 border-blue-500">
            For You
          </Link>
          <Link to="/" className="text-white font-bold hover:border-b-4 border-blue-500">
            Following
          </Link>
        </nav>

        {/* Content Section */}
        <div className="pt-[60px] pb-[20px] overflow-y-auto">
          {/* Post Input */}
          <div className="bg-black border border-gray-600 p-4 rounded-[20px] mb-10">
            <div className="flex items-center mb-4">
              <Link to="https://x.com/IrmiyaJeth79445">
                <img src="./images/jay.jpg" alt="profile" className="w-10 h-10 rounded-full" />
              </Link>
              <textarea
                className="ml-4 w-full p-2 rounded-lg resize-none text-white bg-black placeholder-gray-500 focus:outline-none"
                placeholder="What's happening?!"
              ></textarea>
            </div>
            <div className="flex justify-between items-center">
              <div className="icons flex space-x-4 text-blue-400">
                <label htmlFor="file-input" className="cursor-pointer">
                  <CameraIcon className="w-5 h-5" />
                </label>
                <input id="file-input" type="file" accept="image/*,video/*" className="hidden" />
                <label htmlFor="photo-input" className="cursor-pointer">
                  <PhotoIcon className="w-5 h-5" />
                </label>
                <input id="photo-input" type="file" accept="image/*" className="hidden" />
                <ChartBarIcon className="w-5 h-5 cursor-pointer" />
                <div className="relative">
                  <FaceSmileIcon className="w-5 h-5 cursor-pointer" onClick={() => handleEmojiSelect("😊")} />
                  {emoji && <span className="absolute left-8 bottom-0 text-xl">{emoji}</span>}
                </div>
                <div className="relative">
                  <CalendarDaysIcon className="w-5 h- cursor-pointer" onClick={() => setShowDatePicker(!showDatePicker)} />
                  {showDatePicker && (
                    <DatePicker selected={selectedDate} onChange={handleDateChange} inline className="absolute top-8 left-0 bg-white text-black rounded-md shadow-lg" />
                  )}
                </div>
              </div>
              <button className="bg-gray-600 text-black px-4 py-1 rounded-[20px] hover:bg-gray-200">Post</button>
            </div>
          </div>

          {/* Posts */}
          {posts.map((post) => (
            <div key={post.id} className="mb-6 pb-6 border-b border-gray-600 last:border-none">
              <div className="post bg-black border border-gray-600 p-4 rounded-[20px] text-[15px]">
                <div className="content mb-4">
                  <h3 className="font-bold">{post.author}</h3>
                  <p className="text-sm text-gray-400">{post.username}</p>
                  <p className="mt-2">{post.content}</p>
                </div>
                <div className="video mb-4">
                  <video
                    ref={(el) => (videoRefs.current[post.id] = el)}
                    data-id={post.id}
                    src={post.videoSrc}
                    controls
                    muted
                    loop
                    className="w-full rounded-lg"
                  ></video>
                </div>
                <div className="actions flex justify-between items-center text-gray-500">
                  <button onClick={() => handleStatChange(post.id, "comment")} className="flex items-center space-x-1 text-gray-600">
                    <ChatBubbleLeftEllipsisIcon className="w-5 h-5" />
                    <small>{post.stats.comments}</small>
                  </button>
                  <button onClick={() => handleStatChange(post.id, "retweet")} className="flex items-center space-x-1 text-gray-600">
                    <ArrowPathRoundedSquareIcon className="w-5 h-5" />
                    <small>{post.stats.retweets}</small>
                  </button>
                  <button onClick={() => handleStatChange(post.id, "like")} className="flex items-center space-x-1 text-gray-600">
                    <HeartIcon className="w-5 h-5" />
                    <small>{post.stats.likes}</small>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-600">
                    <EyeIcon className="w-5 h-5" />
                    <small>1.5k</small>
                  </button>
                  <button className="text-gray-600">
                    <BookmarkIcon className="w-5 h-5" />
                  </button>
                  <button className="text-gray-600">
                    <ShareIcon className="w-5 h-5" />
                  </button>
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
