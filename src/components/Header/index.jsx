import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./index.css";

export default function Header() {
  return (
    <main>
      <header>
        <nav>
          <div className="Navbar">
            <ul>
              <li>
                <NavLink to="/" className="nav-btn">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/shows" className="nav-btn">
                  Shows
                </NavLink>
              </li>
              <li>
                <NavLink to="/search" className="nav-btn">
                  Search
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <Outlet />
    </main>
  );
}
