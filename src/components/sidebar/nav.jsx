import {
  HomeIcon,
  MagnifyingGlassIcon,
  BellIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  UserGroupIcon,
  UserIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header className="fixed top-0 left-0 w-[300px] h-screen bg-black text-white font-bold font-serif shadow-md flex flex-col justify-between p-6 overflow-hidden">
      {/* Logo Section */}
      <div className="logo mb-4">
        <Link to="/">
          <div className="flex items-center ">
          <svg className="w-8 h-8 text-gray-800 dark:text-white ml-[20px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
</svg>

          </div>
        </Link>
      </div>

      {/* Navigation Icons (Vertical Layout) */}
      <nav className="flex flex-col space-y-3">
        <Link
          to="/"
          className="flex items-center space-x-3 hover:rounded-full hover:bg-[#08070ce1] w-full py-2 px-4"
        >
          <HomeIcon className="w-6 h-6 text-white" />
          <span>Home</span>
        </Link>
        <Link
          to="/explore"
          className="flex items-center space-x-3 hover:rounded-full hover:bg-[#08070ce1] w-full py-2 px-4"
        >
          <MagnifyingGlassIcon className="w-6 h-6 text-white" />
          <span>Explore</span>
        </Link>
        <Link
          to="/notifications"
          className="flex items-center space-x-3 hover:rounded-full hover:bg-[#08070ce1] w-full py-2 px-4"
        >
          <BellIcon className="w-6 h-6 text-white" />
          <span>Notifications</span>
        </Link>
        <Link
          to="/messages"
          className="flex items-center space-x-3 hover:rounded-full hover:bg-[#08070ce1] w-full py-2 px-4"
        >
          <EnvelopeIcon className="w-6 h-6 text-white" />
          <span>Messages</span>
        </Link>
        <Link
          to="/grok"
          className="flex items-center space-x-3 hover:rounded-full hover:bg-[#08070ce1] w-full py-2 px-4"
        >
          <GlobeAltIcon className="w-6 h-6 text-white" />
          <span>Grok</span>
        </Link>
        <Link
          to="/communities"
          className="flex items-center space-x-3 hover:rounded-full hover:bg-[#08070ce1] w-full py-2 px-4"
        >
          <UserGroupIcon className="w-6 h-6 text-white" />
          <span>Communities</span>
        </Link>
        <Link
          to="/profile"
          className="flex items-center space-x-3 hover:rounded-full hover:bg-[#08070ce1] w-full py-2 px-4"
        >
          <UserIcon className="w-6 h-6 text-white" />
          <span>Profile</span>
        </Link>
        <Link
          to="/more"
          className="flex items-center space-x-3 hover:rounded-full hover:bg-[#08070ce1] w-full py-2 px-4"
        >
          <EllipsisHorizontalIcon className="w-6 h-6 text-white" />
          <span>More</span>
        </Link>
      </nav>

      {/* Post Button and Profile Section */}
      <div className="flex flex-col space-y-4">
        <Link to="/post">
          <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-blue-600 w-full border-0 outline-0">
            Post
          </button>
        </Link>
        <div className="flex items-center space-x-3 hover:rounded-full hover:bg-[#08070ce1] w-full py-2 px-4">
          {/* Profile Picture */}
          <img
            src="/public/images/jay.jpg"
            alt="profile"
            className="rounded-full w-10 h-10"
          />

          {/* Profile Name and Username */}
          <div className="flex flex-col">
            <span className="text-white font-bold text-sm">Jethro Irmiya</span>
            <span className="text-gray-400 text-sm">@dev_jaytee</span>
          </div>

          {/* Ellipsis Icon */}
          <EllipsisHorizontalIcon className="w-6 h-6 text-gray-700" />
        </div>
      </div>
    </header>
  );
};

export default Nav;
