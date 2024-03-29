import React from "react";
import { Switch, Route } from "react-router-dom";
import PostList from "./PostList";
import PostForm from "./PostForm";
import PostSearch from "./PostSearch";

const ApplicationViews = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <PostSearch />
                <PostList />
            </Route>

            <Route path="/posts/add">
                <PostForm />
            </Route>

            <Route path="/posts/:id">{/* TODO: Post Details Component */}</Route>
        </Switch>
    );
};

export default ApplicationViews;