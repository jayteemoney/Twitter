import { Link } from "react-router-dom";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  BellIcon,
  EnvelopeIcon,
  UserGroupIcon,
  UserIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";

const Nav = () => {
  return (
    <header className="fixed top-0 left-0 w-[320px] h-screen bg-black text-white font-serif shadow-md flex flex-col justify-between p-6">
      {/* Logo Section */}
      <div className="logo pl-12">
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="/images/x logo.png"
            alt=""
            className="h-8 w-8 ml-7 font-bold  hover:bg-gray-800 rounded-[20px]"
          />
        </Link>
      </div>

      {/* Navigation Section */}
      <nav className="flex flex-col space-y-4 pl-[60px] font-bold">
        <Link
          to="/"
          className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-950 rounded-[20px]"
        >
          <HomeIcon className="w-7 h-7" />
          <span className="text-[18px]">Home</span>
        </Link>
        <Link
          to="/explore"
          className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-950 rounded-[20px]"
        >
          <MagnifyingGlassIcon className="w-7 h-7" />
          <span className="text-[18px]">Explore</span>
        </Link>
        <Link
          to="/notifications"
          className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-950 rounded-[20px]"
        >
          <BellIcon className="w-7 h-7" />
          <span className="text-[18px]">Notifications</span>
        </Link>
        <Link
          to="/messages"
          className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-950 rounded-[20px]"
        >
          <EnvelopeIcon className="w-7 h-7" />
          <span className="text-[18px]">Messages</span>
        </Link>
        <Link
          to="/grok"
          className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-950 rounded-[20px]"
        >
          <UserGroupIcon className="w-7 h-7" />
          <span className="text-[18px]">Grok</span>
        </Link>
        <Link
          to="/profile"
          className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-950 rounded-[20px]"
        >
          <UserIcon className="w-7 h-7" />
          <span className="text-[18px]">Profile</span>
        </Link>
        <Link
          to="/more"
          className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-950 rounded-[20px]"
        >
          <EllipsisHorizontalIcon className="w-7 h-7" />
          <span className="text-[18px]">More</span>
        </Link>
      </nav>

      {/* Post Button and Profile Section */}
      <div className="flex flex-col space-y-4 pl-12">
        {/* Post Button */}
        <Link to="/post">
          <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition w-[220px]">
            Post
          </button>
        </Link>

        {/* Profile Section */}
        <div className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-950 rounded-[20px]">
          {/* Profile Picture */}
          <img
            src="/images/jay.jpg"
            alt="Profile"
            className="rounded-full w-10 h-10"
          />

          {/* Profile Name and Username */}
          <div className="flex flex-col">
            <span className="text-white font-bold text-sm">Jethro Irmiya</span>
            <span className="text-gray-400 text-sm">@dev_jaytee</span>
          </div>

          {/* Options Icon */}
          <EllipsisHorizontalIcon className="w-6 h-6 text-gray-500" />
        </div>
      </div>
    </header>
  );
};

export default Nav;
