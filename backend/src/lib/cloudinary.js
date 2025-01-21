import { v2 as cloudinary } from "cloudinary";

import { config } from "dotenv";

config();

console.log("Cloudinary URL",process.env.CLOUDINARY_CLOUD_NAME);
console.log("Cloudinary API key",process.env.CLOUDINARY_API_KEY);
console.log("Cloudinary secrect",process.env.CLOUDINARY_API_SECRET);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;