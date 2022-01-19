import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xC3107A142ee45118DaE15962a990A31FC03728C2"
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Radio pass",
        description: "This NFT will give you access to RadioDAO!",
        image: readFileSync("scripts/assets/1.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
