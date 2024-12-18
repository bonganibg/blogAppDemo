import { Router } from "express";
import { getAllBlogs, getBlogById, createBlog, updateBlog, deleteBlog } from "../controllers/blog.controller.js";

const router = Router();

router.get("/", getAllBlogs);
router.get("/:id", getBlogById);
router.post("/", createBlog);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

export default router;