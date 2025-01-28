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
      <div className="logo mb-8 pl-12">
        <Link to="/" className="flex items-center space-x-3">
          <span className="ml-[20px] text-3xl font-bold hover:bg-gray-600 rounded-[50%] p-2">X</span>
        </Link>
      </div>

      {/* Navigation Section */}
      <nav className="flex flex-col space-y-2 pl-[60px]">
        <Link
          to="/"
          className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-800 rounded-md"
        >
          <HomeIcon className="w-6 h-6" />
          <span>Home</span>
        </Link>
        <Link
          to="/explore"
          className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-800 rounded-md"
        >
          <MagnifyingGlassIcon className="w-6 h-6" />
          <span>Explore</span>
        </Link>
        <Link
          to="/notifications"
          className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-800 rounded-md"
        >
          <BellIcon className="w-6 h-6" />
          <span>Notifications</span>
        </Link>
        <Link
          to="/messages"
          className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-800 rounded-md"
        >
          <EnvelopeIcon className="w-6 h-6" />
          <span>Messages</span>
        </Link>
        <Link
          to="/grok"
          className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-800 rounded-md"
        >
          <UserGroupIcon className="w-6 h-6" />
          <span>Grok</span>
        </Link>
        <Link
          to="/profile"
          className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-800 rounded-md"
        >
          <UserIcon className="w-6 h-6" />
          <span>Profile</span>
        </Link>
        <Link
          to="/more"
          className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-800 rounded-md"
        >
          <EllipsisHorizontalIcon className="w-6 h-6" />
          <span>More</span>
        </Link>
      </nav>

      {/* Post Button and Profile Section */}
      <div className="flex flex-col space-y-6 pl-12">
        {/* Post Button */}
        <Link to="/post">
          <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-blue-600 transition w-full">
            Post
          </button>
        </Link>

        {/* Profile Section */}
        <div className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-800 rounded-md">
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
