import React from "react";
import { Link } from 'react-router-dom';
import posts from "../../data/posts.json";

function BlogPostSummaryPage() {
    return (
        <>
            <h1>Blogpost overzicht</h1>
            <p>Er zijn momenteel in totaal {posts.length} blogposts.</p>
            <ul>
                {posts.map((blogpost) => {
                    return <li key={blogpost.id}>
                        <Link to={`blogposts/${blogpost.id}`}>{blogpost.title}</Link>
                    </li>
                })}
            </ul>
        </>
    )
}

export default BlogPostSummaryPage