import express from "express";
import {
  addComment,
  getCommentsByBlog,
  deleteComment,
} from "../controllers/commentController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

//Routes
router.post("/:blogId", authMiddleware, addComment);
router.get("/:blogId", authMiddleware, getCommentsByBlog);
router.delete("/:commentId", authMiddleware, deleteComment);

export default router;
