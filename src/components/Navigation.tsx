import { useState } from "react";
import classes from "./Navigation.module.scss";
import iconMenu from "/icon-menu.svg";
import iconMenuClose from "/icon-menu-close.svg";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  function handleMenuOpen() {
    setMenuOpen((prev) => !prev);
  }

  return (
    <div className={classes.container}>
      <nav className={classes.nav}>
        <img src="/logo.svg" alt="Logo" className={classes.logo} />

        <button onClick={handleMenuOpen} className={classes.toggler}>
          <img
            src={menuOpen ? iconMenuClose : iconMenu}
            alt="Navigation menu toggler"
          />
        </button>

        <div
          className={`${classes.navbar} ${
            menuOpen ? classes.mobileReveal : ""
          }`}
        >
          <ul className={classes.menu}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">New</a>
            </li>
            <li>
              <a href="#">Popular</a>
            </li>
            <li>
              <a href="#">Trending</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
