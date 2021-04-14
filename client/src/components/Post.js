import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";

const Post = ({ post }) => {
    // const comments = post.comments

    return (
        <Card className="m-4">
            <p className="text-left px-2">Posted by: {post.userProfile.name}</p>
            <CardImg top src={post.imageUrl} alt={post.title} />
            <CardBody>
                <p>
                    <strong>{post.title}</strong>
                </p>
                <p>{post.caption}</p>

                <div className="card">
                    <div className="card-header">
                        Comments
                    </div>
                    <ul className="list-group list-group-flush">
                        {post.comments.map(comment => {
                            return <li className="list-group-item" key={comment.id}>{comment.message}</li>
                        })
                        }
                    </ul>
                </div>
            </CardBody>
        </Card>
    );
};

export default Post;