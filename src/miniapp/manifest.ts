import type { ManifestType } from "./schema";

// Example of using ManifestType
// TODO: proper manifest
export const manifest: ManifestType = {
  accountAssociation: {
    header: "header-value",
    payload: "payload-value",
    signature: "signature-value",
  },
  frame: {
    version: "1",
    name: "Pectra POAP",
    homeUrl: new URL("https://pectra.dtech.vision"),
    iconUrl: new URL("https://ethereumupgrades.com/assets/img/backgrounds/pectra2.png"),
    imageUrl: new URL("https://ethereumupgrades.com/assets/img/cover/cover.png"),
    buttonTitle: "Mint POAP",
  },
};
