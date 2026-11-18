{
  description = "AI & GAME DEVELOPMENT CLUB 公式サイト（Next.js + Tailwind CSS + TypeScript）";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs =
    { self, nixpkgs }:
    let
      supportedSystems = [
        "x86_64-linux"
        "aarch64-linux"
        "x86_64-darwin"
        "aarch64-darwin"
      ];

      forAllSystems = f:
        nixpkgs.lib.genAttrs supportedSystems (system:
          f nixpkgs.legacyPackages.${system});
    in
    {
      # 開発環境: `nix develop` で入る（Node.js 22 LTS + npm）
      devShells = forAllSystems (pkgs: {
        default = pkgs.mkShell {
          packages = [
            pkgs.nodejs_22
          ];

          shellHook = ''
            echo "Node $(node -v) / npm $(npm -v)"
            if [ ! -d node_modules ]; then
              echo "依存関係が未インストールです。'npm install' を実行してください。"
            fi
            echo "  npm run dev    -> http://localhost:3000"
            echo "  npm run build  -> 本番ビルド"
            echo "  npm run start  -> 本番サーバー起動"
          '';
        };
      });

      formatter = forAllSystems (pkgs: pkgs.nixfmt);
    };
}
