import express from 'express';
// import mongoose from 'mongoose';
import PostMessage from '../models/post.model.js';

const router = express.Router();

export const getAllPosts = async (req, res) => {
    try{
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    } 
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPosts = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);

    try{
        await newPost.save();
        res.status(201).json(newPost);
        // console.log('post created');
    } 
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export default router;