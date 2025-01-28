import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/sidebar/nav";
import Home from "./components/feed/Home";
import Widgets from "./pages/widget";
import Explore from "./components/feed/explore";
import ExploreWid from "./components/widgets/exploreWid";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-black flex mx-auto font-serif">
        {/* Sidebar */}
        <Nav className="fixed left-0 top-0 h-screen w-[300px] bg-black text-white" />

        {/* Main Content */}
        <div className="ml-[300px] flex-1">
          {/* Scrollable Container */}
          <div className="flex h-screen overflow-y-scroll">
            <div className="flex justify-center w-full max-w-[1350px] mx-auto">
              {/* Feed */}
              <div className="w-[600px] bg-black ">
                <Routes>
                  <Route
                    path="/"
                    element={
                      <>
                        <Home />
                      </>
                    }
                  />
                  <Route
                    path="/explore"
                    element={
                      <>
                        <Explore />
                      </>
                    }
                  />
                  <Route
                    path="/notifications"
                    element={
                      <>
                        {/* Notifications content */}
                      </>
                    }
                  />
                  <Route
                    path="/messages"
                    element={
                      <>
                        {/* Messages content */}
                      </>
                    }
                  />
                  <Route
                    path="/grok"
                    element={
                      <>
                        {/* Grok content */}
                      </>
                    }
                  />
                  <Route
                    path="/profile"
                    element={
                      <>
                        {/* Profile content */}
                      </>
                    }
                  />
                  <Route
                    path="/more"
                    element={
                      <>
                        {/* More options content */}
                      </>
                    }
                  />
                </Routes>
              </div>

              {/* Widgets */}
              <div className="w-[450px] bg-black text-white border-r border-white">
                <Routes>
                  <Route
                    path="/"
                    element={
                      <>
                        <Widgets />
                      </>
                    }
                  />
                   <Route
                    path="/explore"
                    element={
                      <>
                        <ExploreWid />
                      </>
                    }
                  />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
