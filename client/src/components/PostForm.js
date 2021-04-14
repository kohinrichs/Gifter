import React, { useContext, useEffect, useState } from "react";
import { Form, FormGroup, Card, CardBody, Label, Input, Button } from "reactstrap";
import { PostContext } from "../providers/PostProvider";
import { useHistory } from "react-router-dom";

const PostForm = () => {
    const { addPost, getAllPosts } = useContext(PostContext)

    // wait for data before button is active. Look at the button to see how it's setting itself to disabled or not based on this state
    // const [isLoading, setIsLoading] = useState(true);

    // Use this hook to allow us to programatically redirect users
    const history = useHistory();

    const [post, setPost] = useState({
        title: "",
        imageUrl: "",
        caption: "",
        userProfileId: 1,
    })

    //when field changes, update state. This causes a re-render and updates the view.
    //Controlled component
    const handleControlledInputChange = (event) => {
        //When changing a state object or array,
        //always create a copy make changes, and then set state.
        const newPost = { ...post }
        //animal is an object with properties.
        //set the property to the new value
        newPost[event.target.id] = event.target.value
        //update state
        setPost(newPost)
    }

    const handleSavePost = () => {
        addPost({
            title: post.title,
            imageUrl: post.imageUrl,
            caption: post.caption,
            userProfileId: post.userProfileId
        })
            // Calling two functions inside the anonymous .then function
            .then(() => {
                // Navigate the user back to the home route
                history.push("/");
                // getAllPosts()
                // setPost({
                //     title: "",
                //     imageUrl: "",
                //     caption: "",
                //     userProfileId: 1
                // })
            })
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <form className="postForm">
                    <h2 className="postForm__title">Add A Gif</h2>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="postTitle">Title: </label>
                            <input type="text" id="title" required autoFocus className="form-control"
                                placeholder="Title"
                                onChange={handleControlledInputChange}
                                value={post.title} />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="breed">Imgae URL:</label>
                            <input type="text" id="imageUrl" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Image URL" value={post.imageUrl} />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="breed">Caption: </label>
                            <input type="text" id="caption" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Caption" value={post.caption} />
                        </div>
                    </fieldset>
                    <button className="btn btn-primary"
                        // disabled={isLoading}
                        onClick={
                            event => {
                                event.preventDefault() // Prevent browser from submitting the form and refreshing the page
                                handleSavePost()
                            }}>Save</button>
                </form>
            </div>
        </div>
    )
}

export default PostForm;