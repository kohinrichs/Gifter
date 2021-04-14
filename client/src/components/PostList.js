import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../providers/PostProvider";
import Post from "./Post";

const PostList = () => {
    const { posts, getAllPosts, searchPosts, searchTerms } = useContext(PostContext);

    useEffect(() => {
        getAllPosts();
    }, []);

    useEffect(() => {
        if (searchTerms !== "") {
            // If the search field is not blank, display matching posts
            searchPosts(searchTerms)
        } else {
            // If the search field is blank, display all posts
            getAllPosts()
        }
    }, [searchTerms])

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="cards-column">
                    {posts.map((post) => (
                        <Post key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PostList;