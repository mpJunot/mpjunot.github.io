import type { NextConfig } from "next";

const repo = "mpjunot.github.io";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/" + repo,
  assetPrefix: "/" + repo + "/",
};

export default nextConfig;
