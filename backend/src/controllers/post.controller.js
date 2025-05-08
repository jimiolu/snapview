import { CosmosClient } from "@azure/cosmos";
import dotenv from "dotenv";
import { uploadToBlobStorage } from "../lib/storage.js";

dotenv.config();

export const media = async (req, res) => {
  // cosmos db connection
  const endpoint = process.env.COSMOS_ENDPOINT;
  const key = process.env.COSMOS_KEY;

  const client = new CosmosClient({ endpoint, key });
  const database = client.database("SnapDB");
  const container = database.container("MediaItems");

  try {
    const { resources } = await container.items.readAll().fetchAll();
    res.status(200).json(resources);
  } catch (error) {
    console.log("Error uploading media", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const postUpload = async (req, res) => {
  try {
    const fileBuffer = req.file.buffer;
    const originalName = req.file.originalname;

    const uniqueFileName = Date.now() + "-" + originalName;
    const fileUrl = await uploadToBlobStorage(fileBuffer, uniqueFileName);

    res.status(200).json({ message: "Upload successful", url: fileUrl });
  } catch (error) {
    console.log("Error uploading", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
