const { execSync } = require("child_process");

function getLastUpdated() {
  try {
    return execSync("git log -1 --format=%cI").toString().trim();
  } catch {
    return new Date().toISOString();
  }
}

// GitHub Pages serves this project site under /<repo-name>/. The deploy
// workflow sets BASE_PATH; locally it is empty so the site lives at /.
const basePath = process.env.BASE_PATH || "";

module.exports = {
  basePath,
  env: {
    LAST_UPDATED: getLastUpdated(),
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  // GitHub Pages serves static files only
  output: "export",
  images: {
    unoptimized: true,
  },
};
