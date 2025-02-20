const usersToFollow = [
    {
      id: 1,
      name: "Tope Ogunniran (TOC)",
      username: "@callme_TOC",
      bio: "Minister of the Gospel | MultiDisciplinary Creative | Design Lead",
      follows: "Netrovert (sage arc) 🦊 and 2 others follow",
      links: [
        { text: "@superteamNG", url: "https://twitter.com/superteamNG" },
        { text: "solcartglobal", url: "https://solcartglobal.com" },
      ],
      profilePic: "/images/prof2.JPG",
    },
    {
      id: 2,
      name: "Mayowa Obisesan",
      username: "@amdblessed",
      bio: "Builder | Software Engineer | Teacher at heart ✌️😇",
      follows: "Fitech Community and 9 others follow",
      profilePic: "/images/prof3.JPG",
    },
    {
      id: 3,
      name: "Victory Ezeokafor",
      username: "@viktrified",
      bio: "Blockchain Enthusiast | Smart Contract Security Specialist",
      follows: "Pantong Simon and 9 others follow",
      links: [{ text: "github.com/viktrified", url: "https://github.com/viktrified" }],
      profilePic: "/images/prof4.JPG",
    },
  ];
  
  const WhoToFollow = () => {
    return (
      <div className=" text-white p-4 rounded-lg">
        <h2 className="text-lg font-bold mb-4">Who to follow</h2>
  
        {usersToFollow.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between mb-4 p-2 rounded-lg hover:bg-gray-900 transition duration-200"
          >
            {/* Left Section */}
            <div className="flex items-start">
              {/* Profile Image */}
              <img
                src={user.profilePic}
                alt={user.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              {/* User Details */}
              <div>
                <p className="text-xs text-gray-500">{user.follows}</p>
                <h3 className="font-semibold">{user.name}</h3>
                <p className="text-xs text-gray-500">{user.username}</p>
                <p className="text-xs text-gray-400">{user.bio}</p>
                {/* Links */}
                {user.links &&
                  user.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 text-xs"
                    >
                      {link.text}{" "}
                    </a>
                  ))}
              </div>
            </div>
  
            {/* Follow Button */}
            <button className="bg-white text-black px-3 py-1 text-sm font-medium rounded-full hover:bg-gray-300">
              Follow
            </button>
          </div>
        ))}
  
        {/* Show More */}
        <button className="text-blue-500 text-sm mt-2 hover:underline">
          Show more
        </button>
      </div>
    );
  };
  
  export default WhoToFollow;
  