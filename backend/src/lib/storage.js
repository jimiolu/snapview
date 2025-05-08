import { BlobServiceClient } from "@azure/storage-blob";

export const uploadToBlobStorage = async (fileBuffer, fileName) => {
  const blobServiceClient = BlobServiceClient.fromConnectionString(
    process.env.BLOB_CONNECTION_STRING
  );

  // get container client
  const containerClient = blobServiceClient.getContainerClient(
    process.env.BLOB_CONTAINER_NAME
  );

  // create a block blob client
  const blockBlobClient = containerClient.getBlockBlobClient(fileName);

  // upload file
  await blockBlobClient.uploadData(fileBuffer);

  return blockBlobClient.url;
};
