import type { FrameEmbedNext } from "./schema";

const fcMetadata: FrameEmbedNext = {
  version: "next",
  imageUrl: new URL("https://ethereumupgrades.com/assets/img/cover/cover.png"),
  button: {
    title: "Mint Pectra POAP",
    action: {
      type: "launch_frame",
      name: "Pectra POAP",
      url: new URL("https://pectra.dtech.vision"),
      splashImageUrl: new URL("https://ethereumupgrades.com/assets/img/backgrounds/pectra2.png"),
      splashBackgroundColor: "#f7f7f7",
    },
  },
};

export default function getFCembed(): string {
  return JSON.stringify(fcMetadata);
}
