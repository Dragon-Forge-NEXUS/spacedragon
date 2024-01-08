import path from "path";
import { fileURLToPath } from "url";

// With the move to TSUP as a build tool, this keeps path routes in other files (installers, loaders, etc) in check more easily.
// Path is in relation to a single index.js file inside ./dist
const __filename = fileURLToPath(import.meta.url);
const distPath = path.dirname(__filename);
export const PKG_ROOT = path.join(distPath, "../");

//export const PKG_ROOT = path.dirname(require.main.filename);

export const TITLE_TEXT = ` ___________  ___  _____  _________________  ___  _____ _____ _   _ 
/  ___| ___ \\/ _ \\/  __ \\|  ___|  _  \\ ___ \\/ _ \\|  __ \\  _  | \\ | |
\\ \`--.| |_/ / /_\\ \\ /  \\/| |__ | | | | |_/ / /_\\ \\ |  \\/ | | |  \\| |
 \`--. \\  __/|  _  | |    |  __|| | | |    /|  _  | | __| | | | . \` |
/\\__/ / |   | | | | \\__/\\| |___| |/ /| |\\ \\| | | | |_\\ \\ \\_/ / |\\  |
\\____/\\_|   \\_| |_/\\____/\\____/|___/ \\_| \\_\\_| |_/\\____/\\___/\\_| \\_/
`;
export const DEFAULT_APP_NAME = "my-spacedragon-app";
export const SPACEDRAGON = "spacedragon";
