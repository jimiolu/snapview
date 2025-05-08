import express from "express";
import dotenv from "dotenv";
import postRoutes from "./routes/post.route.js";
import authRoutes from "./routes/auth.route.js";
import connectDB from "./lib/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/posts", postRoutes);
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
  connectDB();
});
