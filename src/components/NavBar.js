import React from "react";
import { ReactComponent as Logo } from "./logo.svg";
export function NavBar() {
  return (
    <nav className="nav">


      <div>
        <a href="/">
          <button>Current Report</button>
        </a>
        <a href="/About">
          <button>About</button>
        </a>
        <a href="/ContactUs">
          <button>Contact us</button>
        </a>
      </div>
      <logo>
        <Logo height={100}/>
      </logo>
    </nav>
  );
}
