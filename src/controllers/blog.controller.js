import Blog from "../models/blog.model.js";

export function getAllBlogs(req, res) {
  Blog.find().then((blogs) => {
    res.json(blogs);
  });
}

export function getBlogById(req, res) {
  const { id } = req.params;
  Blog.findById(id).then((blog) => {
    if (blog) {
      res.json(blog);
    } else {
      res.status(404).json({ message: "Blog not found" });
    }
  });
}

export function createBlog(req, res) {
  const blog = new Blog(req.body);
  blog.save().then((blog) => {
    res.json(blog);
  });
}

export function updateBlog(req, res) {
  const { id } = req.params;
  Blog.findByIdAndUpdate(id, req.body).then((blog) => {
    if (blog) {
      res.json(blog);
    } else {
      res.status(404).json({ message: "Blog not found" });
    }
  });
}

export function deleteBlog(req, res) {
  const { id } = req.params;
  Blog.findByIdAndDelete(id).then((blog) => {
    if (blog) {
      res.json(blog);
    } else {
      res.status(404).json({ message: "Blog not found" });
    }
  });
}