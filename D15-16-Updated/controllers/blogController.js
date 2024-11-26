import Blog from "../models/Blog.js";

// Create a new blog post
const createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;

    const blog = await Blog.create({ title, content, author: req.user._id });
    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get all blog posts
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate("author", "name");
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get a blog post by ID
const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await Blog.findById(id).populate("author", "name");
    if (!blog) return res.status(404).json({ error: "Blog not found" });

    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export { createBlog, getBlogs, getBlogById };
