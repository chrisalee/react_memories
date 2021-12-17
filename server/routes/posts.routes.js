import express from "express";
import { getAllPosts, createPosts } from '../controllers/posts.controllers.js';

const router = express.Router();

// check in localhost:5000/posts
router.get('/', getAllPosts);
router.post('/', createPosts);

export default router;
