import React from "react";
import { Link } from "react-router-dom";
import rotatingLogo from "../assets/rotating-logo.gif";

function Nav() {
  return (
    <nav className="flex flex-col w-full items-center font-bold">
      <h4 className="text-gray-300 mt-6">
        &lt;*all belts are ~20% off with purchase of any pants&gt;
      </h4>

      <Link to="/">
        <img src={rotatingLogo} />
      </Link>

      <ul className="flex gap-4 text-gray-300 font-bold">
        <li>
          <Link to="/" className="hover:underline">
            &lt;r3sp-v2&gt;
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:underline">
            &lt;r3yx-v2&gt;
          </Link>
        </li>
        <li>
          <Link to="/gift" className="hover:underline">
            &lt;gift&gt;
          </Link>
        </li>
        <li>
          <Link to="/media" className="hover:underline">
            &lt;media&gt;
          </Link>
        </li>
        <li>
          <Link to="/team" className="hover:underline">
            &lt;team&gt;
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
