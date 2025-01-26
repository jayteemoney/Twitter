
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/sidebar/nav";

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/explore" element={<div>Explore Page</div>} />
        <Route path="/notifications" element={<div>Notifications Page</div>} />
        <Route path="/messages" element={<div>Messages Page</div>} />
        <Route path="/grok" element={<div>Grok Page</div>} />
        <Route path="/communities" element={<div>Communities Page</div>} />
        <Route path="/profile" element={<div>Profile Page</div>} />
        <Route path="/more" element={<div>More Page</div>} />
        <Route path="/post" element={<div>Post Page</div>} />
      </Routes>
    </Router>
  );
};

export default App;
