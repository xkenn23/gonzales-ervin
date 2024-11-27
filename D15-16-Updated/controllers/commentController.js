import Comment from "../models/Comment.js";
import Blog from "../models/Blog.js";

// Add a Comment
const addComment = async (req, res) => {
  try {
    const { blogId } = req.params;
    const { text } = req.body;

    console.log("Blog ID from URL:", blogId); // Debugging log
    console.log("Comment Text from Body:", text); // Debugging log

    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    const comment = await Comment.create({
      text,
      blog: blogId,
      user: req.user._id,
    });

    const populatedComment = await Comment.findById(comment._id).populate(
      "blog",
      "title content"
    );

    res.status(201).json(populatedComment);
  } catch (error) {
    console.error("Error adding comment:", error);
    res.status(500).json({ error: "Server error", message: error.message });
  }
};

// Get Comments for a Blog
const getCommentsByBlog = async (req, res) => {
  try {
    const { blogId } = req.params;

    const comments = await Comment.find({ blog: blogId })
      .populate("user", "name")
      .populate("blog", "title content");
    res.status(200).json(comments);
  } catch (error) {
    console.error("Failed to fetch comments", error);
    res.status(500).json({ error: "Server error", message: error.message });
  }
};

// Delete a Comment
const deleteComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    const comment = await Comment.findById(commentId);
    if (!comment) return res.status(404).json({ error: "Comment not found" });
    if (comment.user.toString() !== req.user._id)
      return res.status(403).json({ error: `authorization denied` });
    await comment.deleteOne();
    res.status(200).json({ message: `Comment deleted successfully` });
  } catch (error) {
    res.status(500).json({ error: "Server error", message: error.message });
  }
};

export { addComment, getCommentsByBlog, deleteComment };
