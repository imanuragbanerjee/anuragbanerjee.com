import { ignorePatterns } from "@anuragbanerjee/oxlint-config";
import antiSlop from "@anuragbanerjee/oxlint-config/anti-slop";
import next from "@anuragbanerjee/oxlint-config/next";
import { defineConfig } from "oxlint";

export default defineConfig({
  extends: [next, antiSlop],
  ignorePatterns: [...ignorePatterns, "**/components/ui/**"],
  options: { typeAware: true },
  overrides: [
    {
      // JSON-LD is open-ended output that only goes to JSON.stringify.
      files: ["src/lib/schema.ts", "src/components/json-ld.tsx"],
      rules: {
        "anti-slop/no-known-value-widening": "off",
        "anti-slop/no-unsafe-dictionary-type": "off",
      },
    },
  ],
});
