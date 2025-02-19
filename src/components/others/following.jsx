const Following = () => {
  const usersToFollow = [
    {
      name: "Nathan Okokwo",
      username: "@Ochandu",
      profileImage: "/images/pro1.JPG", // Replace with the actual image path
      verified: true,
    },
    {
      name: "Nana Sylvia",
      username: "@slyvian_04",
      profileImage: "/images/pro2.JPG", // Replace with the actual image path
    },
    {
      name: "Guwom Na’anpe",
      username: "@naanpeguwom",
      profileImage: "/images/pro2.jpeg", // Replace with the actual image path
    },
  ];

  return (
    <div className="flex flex-col bg-black text-white border border-gray-600 mt-4 rounded-[20px]">
      {/* "Who to Follow" Section */}
      <div className="bg-black rounded-2xl p-4 w-full max-w-[400px] mt-4">
        <h2 className="text-xl font-bold mb-4">Who to follow</h2>

        {usersToFollow.map((user, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-3 last:py-0 hover:bg-gray-950 rounded-[20px]"
          >
            {/* Profile Info */}
            <div className="flex items-center space-x-3 ">
              <img
                src={user.profileImage}
                alt={`${user.name}'s profile`}
                className="rounded-full w-12 h-12"
              />
              <div>
                <div className="flex items-center space-x-1">
                  <span className="font-bold text-sm">{user.name}</span>
                  {user.verified && (
                    <span className="text-blue-400">✔</span>
                  )}
                </div>
                <span className="text-gray-400 text-sm">{user.username}</span>
              </div>
            </div>

            {/* Follow Button */}
            <button className="bg-white text-black text-sm font-semibold px-4 py-1 rounded-[20px] hover:bg-gray-600">
              Follow
            </button>
          </div>
        ))}

        {/* Show More */}
        <div className="text-blue-400 text-sm font-semibold text-center mt-4 hover:underline cursor-pointer">
          Show more
        </div>
      </div>
    </div>
  );
};

export default Following;
