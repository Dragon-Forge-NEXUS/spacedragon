import path from "path";
import fs from "fs-extra";

import { PKG_ROOT } from "~/consts.js";
import { type Installer } from "~/installers/index.js";
import { addPackageDependency } from "~/utils/addPackageDependency.js";

export const tailwindInstaller: Installer = ({ projectDir }) => {
  addPackageDependency({
    projectDir,
    dependencies: [
      "tailwindcss",
      "@astrojs/tailwind",
    ],
    devMode: true,
  });

  const extrasDir = path.join(PKG_ROOT, "template/extras");

  const twCfgSrc = path.join(extrasDir, "config/tailwind.config.js");
  const twCfgDest = path.join(projectDir, "tailwind.config.js");

  fs.copySync(twCfgSrc, twCfgDest);
};
