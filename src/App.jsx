import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/sidebar/nav";
import Home from "./components/feed/Home";
import Widgets from "./pages/widget";
import Explore from "./components/feed/explore";
import ExploreWid from "./components/widgets/exploreWid";
import Profile from "./components/feed/profile";
import ProfileWid from "./components/widgets/profileWid";

const App = () => {
  return (
    <Router>
      {/* Main App Container */}
      <div className="flex min-h-screen font-serif bg-black overflow-hidden">
        {/* Sidebar */}
        <div className=" sm:block hidden fixed top-0 left-0 h-auto w-[300px] bg-black text-white border-r border-gray-700">
          <Nav />
        </div>

        {/* Main Content and Widgets Container */}
        <div className="sm:ml-[300px]  flex w-full h-full overflow-hidden">
          {/* Main Content (Profile, Home, Explore) */}
          <div className="w-[600px] h-full  overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>

          {/* Widgets (ProfileWid, HomeWid, ExploreWid) */}
          <div className="w-[450px] hidden lg:block h-full bg-black text-white overflow-y-auto">
            <Routes>
              <Route path="/" element={<Widgets />} />
              <Route path="/explore" element={<ExploreWid />} />
              <Route path="/profile" element={<ProfileWid />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
