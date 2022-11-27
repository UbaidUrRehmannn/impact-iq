/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";

const Navbar = ({ lr, nr, theme }) => {
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">
        <Link href="/">
          <a className="logo">
            {theme ? (
              theme === "themeL" ? (
                <img ref={lr} src={appData.darkLogo} alt="logo" />
              ) : (
                <img ref={lr} src={appData.lightLogo} alt="logo" />
              )
            ) : (
              <img ref={lr} src={appData.lightLogo} alt="logo" />
            )}
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            {/* <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Home
              </span>
              <div className="dropdown-menu">
                <Link href={`/homepage/home1-light`}>
                  <a className="dropdown-item">Main Home</a>
                </Link>
                <Link href={`/homepage/home2-light`}>
                  <a className="dropdown-item">Creative Agency</a>
                </Link>
                <Link href={`/homepage/home5-light`}>
                  <a className="dropdown-item">Digital Agency</a>
                </Link>
                <Link href={`/homepage/home4-light`}>
                  <a className="dropdown-item">Business One Page</a>
                </Link>
                <Link href={`/homepage/home3-light`}>
                  <a className="dropdown-item">Corporate Business</a>
                </Link>
                <Link href={`/homepage/home6-light`}>
                  <a className="dropdown-item">Modern Agency</a>
                </Link>
                <Link href={`/homepage/home7-light`}>
                  <a className="dropdown-item">Freelancer</a>
                </Link>
                <Link href={`/homepage/home8-light`}>
                  <a className="dropdown-item">Architecture</a>
                </Link>
              </div>
            </li> */}
            <li className="nav-item">
              <Link href={`/homepage/home1-light`}>
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Services
              </span>
              <div className="dropdown-menu">
                <Link href={`/showcase/showcase-light`}>
                  <a className="dropdown-item">Amazon PPC Management</a>
                </Link>
                <Link href={`/showcase4/showcase4-light`}>
                  <a className="dropdown-item">Amazon Account Management</a>
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link href={`/about/about-light`}>
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Works
              </span>
              <div className="dropdown-menu">
                <Link href={`/showcase/showcase-light`}>
                  <a className="dropdown-item">Showcase Parallax</a>
                </Link>
                <Link href={`/showcase4/showcase4-light`}>
                  <a className="dropdown-item">Showcase Carousel</a>
                </Link>
                <Link href={`/showcase3/showcase3-light`}>
                  <a className="dropdown-item">Showcase Circle</a>
                </Link>
                <Link href={`/works/works-light`}>
                  <a className="dropdown-item">Portfolio Masonry</a>
                </Link>
                <Link href={`/works2/works2-light`}>
                  <a className="dropdown-item">Portfolio Filtering</a>
                </Link>
                <Link href={`/works3/works3-light`}>
                  <a className="dropdown-item">Portfolio Gallery</a>
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Blog
              </span>
              <div className="dropdown-menu">
                <Link href={`/blog/blog-light`}>
                  <a className="dropdown-item">Blog Standerd</a>
                </Link>
                <Link href={`/blog-list/blog-list-light`}>
                  <a className="dropdown-item">Blog List</a>
                </Link>
                <Link href={`/blog-grid/blog-grid-light`}>
                  <a className="dropdown-item">Blog Grid</a>
                </Link>
                <Link href={`/blog-details/blog-details-light`}>
                  <a className="dropdown-item">Blog Details</a>
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link href={`/contact/contact-light`}>
                <a className="nav-link">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
