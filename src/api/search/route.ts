import fs from "fs";
import path from "path";

const POST_FOLDER_NAME = "src/app/posts/database/(markdowns)";
const POSTS_DIRECTORY = path.join(process.cwd(), POST_FOLDER_NAME);

export function getFileNum() {
    return fs.readdirSync(POSTS_DIRECTORY).length;
};