import { Storage } from "aws-amplify";
import { FileUpload } from "../types";

export default function uploadFiles(uploads: FileUpload[]) {
  try {
    uploads.forEach(async (upload) => {
      const { path, contentType, file } = upload;
      console.log(file);
      await Storage.put(path, file, {
        contentType,
      });
    });
  } catch (error) {
    throw new Error(error);
  }
}
