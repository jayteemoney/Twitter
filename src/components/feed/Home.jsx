import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [likes, setLikes] = useState({ post1: 478, post2: 478 });
  const [comments, setComments] = useState({ post1: 15, post2: 15 });
  const [retweets, setRetweets] = useState({ post1: 10, post2: 10 });

  const handleLike = (post) => {
    setLikes((prev) => ({ ...prev, [post]: prev[post] + 1 }));
  };

  const handleComment = (post) => {
    setComments((prev) => ({ ...prev, [post]: prev[post] + 1 }));
  };

  const handleRetweet = (post) => {
    setRetweets((prev) => ({ ...prev, [post]: prev[post] + 1 }));
  };

  const posts = [
    {
      id: "post1",
      author: "Big Brother Naija",
      username: "@BBnaija",
      content:
        "With Agent Ben's mission accomplished, Handi, Ozee, and Wanni are left hunting high and low for their missing crates of eggs.",
      hashtags: ["#BBNaija", "#BBNaijaS9"],
      videoSrc: "/img/BBnaija.mp4",
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
      videoSrc: "/img/colgate.mp4",
      stats: {
        comments: comments.post2,
        retweets: retweets.post2,
        likes: likes.post2,
      },
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center font-serif">
      {/* Feed Container */}
      <div className=" mx-auto w-[550px] bg-black px-4  border-l-1 border-r-1 border-gray-600 pl-15">
        {/* Navigation */}
        <nav className=" flex justify-around  bg-black p-2 rounded-lg">
          <Link to="/" className="text-white font-bold border-b-4 border-blue-500">
            For You
          </Link>
          <Link to="/" className="text-white font-bold border-b-4 border-blue-500">
            Following
          </Link>
        </nav>

        {/* Post Input */}
        <div className=" bg-black border border-gray-600 p-4 rounded-[20px]  mb-10 ">
          <div className="flex items-center mb-4">
            <Link to="https://x.com/IrmiyaJeth79445">
              <img
                src="./images/jay.jpg"
                alt="profile"
                className="w-10 h-10 rounded-[50%]"
              />
            </Link>
            <textarea
              className="ml-4 w-full p-2 rounded-lg resize-none text-white  placeholder-gray-500 focus:outline-none"
              placeholder="What's happening?!"
            ></textarea>
          </div>
          <div className="flex justify-between items-center">
            <div className="icons flex space-x-4 text-blue-800">
              <i className="fas fa-camera"></i>
              <i className="fas fa-image"></i>
              <i className="fas fa-poll-h"></i>
              <i className="fas fa-emoji"></i>
              <i className="fas fa-calendar"></i>
            </div>
            <button className="bg-gray-600 text-black px-4 py-1 rounded-[20px] hover:bg-gray-200">
              Post
            </button>
          </div>
        </div>

        {/* Posts */}
        {posts.map((post, index) => (
          <div key={post.id}>
            {index > 0 && (
              <hr className=" border-gray-600 my-8 w-full" />
            )}
            <div className="post bg-black border border-gray-600 p-4 rounded-[20px] text-[15px]">
              <div className="content mb-4">
                <h3 className="font-bold">{post.author}</h3>
                <p className="text-sm text-gray-400">{post.username}</p>
                <p className="mt-2">{post.content}</p>
                <div className="hashtags mt-2">
                  {post.hashtags.map((hashtag, idx) => (
                    <Link
                      key={idx}
                      to={`https://x.com/hashtag/${hashtag.slice(1)}?src=hashtag_click`}
                      className="text-blue-500 text-sm mr-2"
                    >
                      {hashtag}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="video mb-4">
                <video
                  src={post.videoSrc}
                  controls
                  autoPlay
                  muted
                  loop
                  className="w-full rounded-lg"
                ></video>
              </div>
              <div className="actions flex justify-between items-center text-gray-500">
                <button
                  onClick={() => handleComment(post.id)}
                  className="flex items-center space-x-1 text-gray-600"
                >
                  <i className="fas fa-comment"></i>
                  <small>{post.stats.comments}</small>
                </button>
                <button
                  onClick={() => handleRetweet(post.id)}
                  className="flex items-center space-x-1 text-gray-600"
                >
                  <i className="fas fa-retweet"></i>
                  <small>{post.stats.retweets}</small>
                </button>
                <button
                  onClick={() => handleLike(post.id)}
                  className="flex items-center space-x-1 text-gray-600"
                >
                  <i className="fas fa-thumbs-up"></i>
                  <small>{post.stats.likes}</small>
                </button>
                <button className="flex items-center space-x-1 text-gray-600">
                  <i className="fas fa-eye"></i>
                  <small>1.5k</small>
                </button>
                <button className="text-gray-600">
                  <i className="fas fa-bookmark"></i>
                </button>
                <button className="text-gray-600">
                  <i className="fas fa-share"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
