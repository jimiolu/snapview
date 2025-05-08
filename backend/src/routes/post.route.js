import express from "express";
import multer from "multer";
import { media, postUpload } from "../controllers/post.controller.js";
import { authorizeRoles, verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 },
});

router.get("/media", media);
router.post(
  "/upload",
  verifyToken,
  authorizeRoles("creator"),
  upload.single("mediaFile"),
  postUpload
);

export default router;
