import PopUp from "./PopUp";
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
      profilePic: "/images/fashion2.jpg", 
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
const Post = () => {
  return (
    <div className="p-4 bg-black text-white">
      <h3>@{posts[0].username}</h3>
      <p>{posts[0].content}</p>
      
      {/* Pass the correct post object */}
      <PopUp post={posts[0]} />
    </div>
  );
};

export default Post;
