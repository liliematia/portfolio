import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "public/images/camera-roll");

export function getCameraRollImages() {
  // Get file names under public/images/camera-roll
  return fs.readdirSync(postsDirectory);
}