import React from "react";
import { ReactComponent as Logo } from "./logo.svg";
export function NavBar() {
  return (
    <nav className="nav">


      <div>
        <a href="/">
          <button>Current Report</button>
        </a>
        <a href="/">
          <button>Future Report</button>
        </a>
        <a href="/ContactUs">
          <button>Contact</button>
        </a>
      </div>
      <logo>
        <Logo height={100}/>
      </logo>
    </nav>
  );
}
