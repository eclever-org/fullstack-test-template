import { config } from "dotenv";

// workspace scripts run with cwd=backend/, so point at the repo-root .env
config({ path: new URL("../../.env", import.meta.url) });
