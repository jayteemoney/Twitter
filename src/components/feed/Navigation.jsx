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

export default function Navigation() {
  return (
    <div>
      <div className="sm:hidden block">
        {/* Navigation Section */}
        <nav
          className="w-full p-2 sm:w-[10%] md:w-[20%] bg-black text-white h-auto sm:h-[100vh] 
                          fixed bottom-0 sm:static
                          flex sm:flex-col justify-around sm:justify-start 
                          border-t border-gray-800 sm:border-none sm:gap-1 z-10"
        >
          <Link to="/" className="w-fit block">
            <div className="flex items-center p-2 gap-3 pr-4 text-[20px] hover:bg-gray-950  hover:rounded-full">
              <HomeIcon className="w-7 h-7" />
              <span className="md:block hidden">Home</span>
            </div>
          </Link>
          <Link to="/explore" className="w-fit block">
            <div className="flex items-center p-2 gap-3 pr-4 text-[20px] hover:bg-gray-950  hover:rounded-full">
              <MagnifyingGlassIcon className="w-7 h-7" />
              <span className="md:block hidden">Explore</span>
            </div>
          </Link>
          <Link to="/notifications" className="w-fit block">
            <div className="flex items-center p-2 gap-3 pr-4 text-[20px] hover:bg-gray-950  hover:rounded-full">
              <BellIcon className="w-7 h-7" />
              <span className="md:block hidden">Notifications</span>
            </div>
          </Link>
          <Link to="/messages" className="w-fit block">
            <div className="flex items-center p-2 gap-3 pr-4 text-[20px] hover:bg-gray-950  hover:rounded-full">
              <EnvelopeIcon className="w-7 h-7" />
              <span className="md:block hidden">Messages</span>
            </div>
          </Link>
          <Link to="/grok" className="w-fit block">
            <div className="flex items-center p-2 gap-3 pr-4 text-[20px] hover:bg-gray-950  hover:rounded-full">
              <UserGroupIcon className="w-7 h-7" />
              <span className="md:block hidden">Grok</span>
            </div>
          </Link>
          <Link to="/profile" className="w-fit block">
            <div className="flex items-center p-2 gap-3 pr-4 text-[20px] hover:bg-gray-950  hover:rounded-full">
              <UserIcon className="w-7 h-7" />
              <span className="md:block hidden">Profile</span>
            </div>
          </Link>
          <Link to="/more" className="w-fit block">
            <div className="flex items-center p-2 gap-3 pr-4 text-[20px] hover:bg-gray-950  hover:rounded-full">
              <EllipsisHorizontalIcon className="w-7 h-7" />
              <span className="md:block hidden">More</span>
            </div>
          </Link>
        </nav>
      </div>
    </div>
  );
}
