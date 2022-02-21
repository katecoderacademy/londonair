import React from "react";
import { ReactComponent as Logo } from "./logo.svg";
export function NavBar() {
  return (
    <nav className="nav" role="navigation">


      <div className="nav-buttons">
        <a data-testid="link" href="/">
          <button>Find a spot</button>
        </a>
        <a data-testid="link" href="/Categories">
          <button>Spots near You</button>
        </a>
        <a data-testid="link-contact" href="/ContactUs">
          <button>Contact us</button>
        </a>
      </div>
      <div className="nav-logo">
        <Logo height={100}/>
      </div>
    </nav>
  );
}
