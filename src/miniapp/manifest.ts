import { Schema } from "effect";
import { ManifestSchema, type ManifestType } from "./schema";

// const manifest = {} satisfies ManifestType;

// Example of using ManifestType
export const manifest: ManifestType = {
  accountAssociation: {
    header: "header-value",
    payload: "payload-value",
    signature: "signature-value",
  },
  frame: {
    version: "1",
    name: "My Mini App",
    homeUrl: new URL("https://example.com"),
    iconUrl: "https://example.com/icon.png",
    imageUrl: "https://example.com/image.png",
    buttonTitle: "Click Me",
  },
};
