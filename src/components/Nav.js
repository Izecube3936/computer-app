import React from 'react'
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
        {/* a-tags makes tha page reload */}
        {/* <a href="/">Home</a> | <a href="/posts">Posts</a> | <a href="/Contact">Contact</a> */}

        {/* Use Link to navigate smoother, without reloading the page*/}
        <Link to="/">Home</Link> | <Link to="/posts">Posts</Link> | <Link to="/contact">Contact</Link>
    </nav>
  )
}

export default Nav