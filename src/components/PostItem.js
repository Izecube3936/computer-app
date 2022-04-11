import React from 'react'
import { Link } from "react-router-dom";

function PostItem({post}) {
  return (
    <article>
        {/* This dynamic link is handled in App.js row 25 = PLACEHOLDER Det finns ett samband mellan ID och placeholder */}
        <Link to={`/posts/${post.id}`}><h3>{post.content}</h3></Link>
    </article>
  )
}

export default PostItem