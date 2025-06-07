import { Link } from "react-router-dom";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  BellIcon,
  EnvelopeIcon,
  UserGroupIcon,
  BookmarkIcon,
  UsersIcon,
  ShieldCheckIcon,
  UserIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";

const Nav = () => {
  return (
    <header className="fixed top-0 left-[150px] w-[330px] h-screen bg-black text-white font-serif shadow-md flex flex-col justify-between p-6">
      {/* Logo Section */}
      <div className="logo sm:block hidden">
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="/images/x logo.png"
            alt=""
            className="h-8 w-8 ml-4 font-bold hover:bg-gray-800 rounded-[30px]"
          />
        </Link>
      </div>

      {/* Navigation Section */}
      <nav
        className="w-full p-2 sm:w-[10%] md:w-[20%] bg-black text-white h-auto sm:h-[100vh] 
                          fixed bottom-0 sm:static
                          flex sm:flex-col justify-around sm:justify-start 
                          border-t border-gray-800 sm:border-none sm:gap-1 z-10"
      >
        <Link to="/" className="w-fit block">
          <div className="flex items-center p-2 gap-3 pr-4 text-[20px] hover:bg-gray-950 hover:rounded-full">
            <HomeIcon className="w-7 h-7" />
            <span className="md:block hidden">Home</span>
          </div>
        </Link>
        <Link to="/explore" className="w-fit block">
          <div className="flex items-center p-2 gap-3 pr-4 text-[20px] hover:bg-gray-950 hover:rounded-full">
            <MagnifyingGlassIcon className="w-7 h-7" />
            <span className="md:block hidden">Explore</span>
          </div>
        </Link>
        <Link to="/notifications" className="w-fit block">
          <div className="flex items-center p-2 gap-3 pr-4 text-[20px] hover:bg-gray-950 hover:rounded-full">
            <BellIcon className="w-7 h-7" />
            <span className="md:block hidden">Notifications</span>
          </div>
        </Link>
        <Link to="/messages" className="w-fit block">
          <div className="flex items-center p-2 gap-3 pr-4 text-[20px] hover:bg-gray-950 hover:rounded-full">
            <EnvelopeIcon className="w-7 h-7" />
            <span className="md:block hidden">Messages</span>
          </div>
        </Link>
        <Link to="/grok" className="w-fit block">
          <div className="flex items-center p-2 gap-3 pr-4 text-[20px] hover:bg-gray-950 hover:rounded-full">
            <UserGroupIcon className="w-7 h-7" />
            <span className="md:block hidden">Grok</span>
          </div>
        </Link>
        <Link to="/bookmarks" className="w-fit block">
          <div className="flex items-center p-2 gap-3 pr-4 text-[20px] hover:bg-gray-950 hover:rounded-full">
            <BookmarkIcon className="w-7 h-7" />
            <span className="md:block hidden">Bookmarks</span>
          </div>
        </Link>
        <Link to="/communities" className="w-fit block">
          <div className="flex items-center p-2 gap-3 pr-4 text-[20px] hover:bg-gray-950 hover:rounded-full">
            <UsersIcon className="w-7 h-7" />
            <span className="md:block hidden">Communities</span>
          </div>
        </Link>
        <Link to="/premium" className="w-fit block">
          <div className="flex items-center p-2 gap-3 pr-4 text-[20px] hover:bg-gray-950 hover:rounded-full">
            <img
              src="/images/x logo.png" 
              alt=""
              className="h-7 w-7"
            />
            <span className="md:block hidden">Premium</span>
          </div>
        </Link>
        <Link to="/verified-orgs" className="w-fit block">
          <div className="flex items-center p-2 gap-3 pr-4 text-[20px] hover:bg-gray-950 hover:rounded-full">
            <ShieldCheckIcon className="w-7 h-7" />
            <span className="md:block hidden">Verified Orgs</span>
          </div>
        </Link>
        <Link to="/profile" className="w-fit block">
          <div className="flex items-center p-2 gap-3 pr-4 text-[20px] hover:bg-gray-950 hover:rounded-full">
            <UserIcon className="w-7 h-7" />
            <span className="md:block hidden">Profile</span>
          </div>
        </Link>
        <Link to="/more" className="w-fit block">
          <div className="flex items-center p-2 gap-3 pr-4 text-[20px] hover:bg-gray-950 hover:rounded-full">
            <EllipsisHorizontalIcon className="w-7 h-7" />
            <span className="md:block hidden">More</span>
          </div>
        </Link>
      </nav>

      {/* Post Button and Profile Section */}
      <div className="flex-col space-y-4 sm:block hidden">
        {/* Post Button */}
        <Link to="/post">
          <button className="justify-center items-center bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition w-[30px] md:w-[220px]">
            <span className="hidden md:block">post</span>
            <span className="block md:hidden text-2xl">+</span>
          </button>
        </Link>

        {/* Profile Section */}
        <div className="items-center space-x-3 sm:block hidden py-3 hover:bg-gray-950 rounded-[20px] flex">
          {/* Profile Picture */}
          <img
            src="/images/jay.jpg"
            alt="Profile"
            className="rounded-full w-10 h-10"
          />

          {/* Profile Name and Username */}
          <div className="hidden md:block">
            <div className="flex flex-col">
              <span className="text-white font-bold text-sm">
                Jethro Irmiya
              </span>
              <span className="text-gray-400 text-sm">@dev_jaytee</span>
            </div>
          </div>

          {/* Options Icon */}
          <EllipsisHorizontalIcon className="w-6 h-6 text-gray-800" />
        </div>
      </div>
    </header>
  );
};

export default Nav;