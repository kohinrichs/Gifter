import React, { useContext } from "react"
import { PostContext } from "../providers/PostProvider"

const PostSearch = () => {
    const { setSearchTerms } = useContext(PostContext)

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    Post search:
                        <input type="text"
                        // className="input--wide"
                        onKeyUp={(event) => setSearchTerms(event.target.value)}
                        placeholder="Search for a post by title or caption... " />
                </div>
            </div>

        </>
    )
}

export default PostSearch;