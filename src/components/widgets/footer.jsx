import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-[300px] bg-black text-gray-500 text-xs py-4">
      <div className="flex flex-wrap justify-center items-center gap-4">
        <Link to="/terms" className="hover:underline transition">
          Terms of Service
        </Link>
        <Link to="/privacy" className="hover:underline transition">
          Privacy Policy
        </Link>
        <Link to="/cookies" className="hover:underline transition">
          Cookie Policy
        </Link>
        <Link to="/accessibility" className="hover:underline transition">
          Accessibility
        </Link>
        <Link to="/ads" className="hover:underline transition">
          Ads Info
        </Link>
        <Link to="/more" className="hover:underline transition">
          More ...
        </Link>
        <span>© 2025 X Corp.</span>
      </div>
    </footer>
  );
};

export default Footer;
