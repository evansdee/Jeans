import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="text">
        <h2>Join Our Community</h2>
        <p>
          Be the first to get the latest updates on our promotion campaigns,
          products and services
        </p>
      </div>
      <div className="form">
        <div className="input">
          <input type="text" placeholder="Enter your Email Address" />
          <button>Join</button>
          {/* <input type="button"placeholder="love" /> */}
        </div>
        <FaInstagram />
      </div>
    </footer>
  );
}
