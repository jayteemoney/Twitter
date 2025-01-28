import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <div>
      {/* Footer Section */}
      <section className="mt-6">
        <ul className="text-sm text-gray-500 space-y-2">
          <Link to="/" className="hover:underline">
            <li>Terms of Services</li>
          </Link>
          <Link to="/" className="hover:underline">
            <li>Privacy Policy</li>
          </Link>
          <Link to="/" className="hover:underline">
            <li>Cookies Policy</li>
          </Link>
          <Link to="/" className="hover:underline">
            <li>Accessibility</li>
          </Link>
          <Link to="/" className="hover:underline">
            <li>Ads Info</li>
          </Link>
          <Link to="/" className="hover:underline">
            <li>More</li>
          </Link>
        </ul>
        <div className="mt-4 text-center text-sm text-gray-400">
          Created by <span className="font-semibold">jaytee</span> | All rights reserved
        </div>
      </section>
    </div>
  )
}

export default Footer
