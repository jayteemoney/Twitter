import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/sidebar/nav";
import Home from "./components/feed/Home";
import Widgets from "./pages/widget";
import Explore from "./components/feed/explore";
import ExploreWid from "./components/widgets/exploreWid";

const App = () => {
  return (
    <Router>
      <div className="flex min-h-screen font-serif bg-black">
        {/* Sidebar */}
        <div className="fixed top-0 left-0 h-full w-[300px] bg-black text-white">
          <Nav />
        </div>

        {/* Main Content and Widgets Container */}
        <div className="ml-[300px] flex h-full w-full overflow-y-auto">
          {/* Main Content */}
          <div className="w-[600px] bg-black">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
            </Routes>
          </div>

          {/* Widgets */}
          <div className="w-[450px] bg-black text-white ">
            <Routes>
              <Route path="/" element={<Widgets />} />
              <Route path="/explore" element={<ExploreWid />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
