import express from "express";
import { getAllPosts, createPosts, updatePost, deletePost, likePost } from '../controllers/posts.controllers.js';

const router = express.Router();

// check in localhost:5000/posts
router.get('/', getAllPosts);
router.post('/', createPosts);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;
