import React from 'react'
import data from '../data';

// http://localhost:3000/api/posts/2
const postId = (req, res) => {
    const { postId } = req.query;
    const { Posts } = data;

    if(postId) {
        const post = Posts.find( value => value.id == postId )
        return res.status(200).json(post)
    }
}

export default postId