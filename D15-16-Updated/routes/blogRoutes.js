import express from "express";
import {
  createBlog,
  getBlogById,
  getBlogs,
} from "../controllers/blogController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

//Routes
router.post(`/`, authMiddleware, createBlog);
router.get(`/`, getBlogs);
router.get(`/:id`, getBlogById);
export default router;
