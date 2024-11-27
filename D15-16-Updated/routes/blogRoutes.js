import express from "express";
import {
  createBlog,
  getBlogById,
  getBlogs,
  updateBlog,
  deleteBlog,
} from "../controllers/blogController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

//Routes
router.post(`/`, authMiddleware, createBlog);
router.get(`/`, getBlogs);
router.get(`/:id`, getBlogById);
router.put(`/:id`, authMiddleware, updateBlog);
router.delete(`/:id`, authMiddleware, deleteBlog);
export default router;
