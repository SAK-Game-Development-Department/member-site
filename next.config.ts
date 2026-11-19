import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options go here */
  cacheComponents: true,
  partialPrefetching: true,
  /* 野花の記法の平文CSS構築し直しにより、@tailwindcss/turbopack のCSSルールは廃止した。
     globals.css はビルドチェーンに依存しない素のCSS。Tailwindは未使用のdevDependencyとして残る。 */
};

export default nextConfig;
