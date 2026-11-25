// Spring Boot serves these files from its classpath static directory at
// /products/{category}/{filename}. Set this to the deployed API host in .env.
const BACKEND_IMAGE_BASE_URL = (
  process.env.REACT_APP_IMAGE_BASE_URL ||
  process.env.REACT_APP_API_BASE_URL ||
  "http://localhost:8080"
).replace(/\/$/, "");

export const getProductImageUrl = (image, categoryName = "") => {
  if (!image) return "/logo512.png";

  let pathname = String(image);
  try {
    const parsedUrl = new URL(pathname, window.location.origin);

    // Public storage URLs (for example, Vercel Blob) are already usable by
    // the browser. Preserve them instead of rebuilding them as local API URLs.
    const isLegacyJsonServerUrl =
      ["localhost", "127.0.0.1"].includes(parsedUrl.hostname) &&
      parsedUrl.port === "3000";
    if (/^https?:$/.test(parsedUrl.protocol) && !isLegacyJsonServerUrl) {
      return image;
    }

    pathname = decodeURIComponent(parsedUrl.pathname);
  } catch {
    // Continue with the original string for plain filenames or relative paths.
  }

  const normalizedPath = pathname.toLowerCase().replace(/\\/g, "/");
  const normalizedCategory = String(categoryName).toLowerCase();
  const fileName = pathname.replace(/\\/g, "/").split("/").filter(Boolean).pop();
  if (!fileName) return "/logo512.png";

  let folder = null;
  if (/wall[\s_-]*posters?/.test(normalizedPath) || /wall[\s_-]*posters?/.test(normalizedCategory)) {
    folder = "wall-posters";
  } else if (/polaroids?/.test(normalizedPath) || /polaroids?/.test(normalizedCategory)) {
    folder = "polaroids";
  }

  // Existing database rows still contain JSON Server URLs on localhost:3000.
  // Resolve those filenames to the equivalent static image served by Spring Boot.
  if (folder) {
    return `${BACKEND_IMAGE_BASE_URL}/products/${folder}/${encodeURIComponent(fileName)}`;
  }

  return image;
};
