import React from "react";
import { ReactComponent as Logo } from "./logo.svg";
export function NavBar() {
  return (
    <nav className="nav">

{/* Layout for the buttons, the div determines where in the container the buttons reside */}
      <div className="nav-button-group">
        <a href="/">
          {/* The button chosen here was one to 'update' rather than go to the homepage, as the user is invited to refresh the page by clicking on the button */}
          <button>Update</button>
        </a>
        <a href="/ContactUs">
          <button>Contact</button>
        </a>
      </div>
{/* The logo's placement is centered in its container for mobile and left for tablet/desktop */}
      <logo>
        <Logo height={100}/>
      </logo>
    </nav>
  );
}
