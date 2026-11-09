// next/link and next/image add basePath automatically, but plain <img>, <a>
// and fetch() do not, so root-relative asset paths go through this.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const withBasePath = (path?: string) => (path?.startsWith("/") ? `${BASE_PATH}${path}` : path);
