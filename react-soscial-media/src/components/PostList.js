import React from "react";
import Post from './Post';


function PostList({ posts }) {
    return posts.map((post, i) => (<Post key={i} {...post} />)); //spread an obj to component
}


export default PostList;