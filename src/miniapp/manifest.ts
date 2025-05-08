import type { ManifestType } from "./schema";

// Example of using ManifestType
// TODO: proper manifest and serving it.
export const manifest: ManifestType = {
  accountAssociation: {
    header: "eyJmaWQiOjE2MDg1LCJ0eXBlIjoiY3VzdG9keSIsImtleSI6IjB4OWQxREIyOTkxY2ZiZWZDMDBiQWI0NEZFNkJmMzE5ZjcxQWM2MDBDZSJ9",
    payload: "eyJkb21haW4iOiJwZWN0cmEuZHRlY2gudmlzaW9uIn0",
    signature: "MHhmZWJkMzY2YTk1YzUxMDUzMDQ5NDViYjMwOTJkMjg3N2IwMjVkNzFlNjM2MzYwYmUzZDRiOTU1NTExMzZlMThjMWE0MjM5YmU0NWMzOGJlYmYxOGJkYjdjN2IxYzM3MDMxNzkwODI1MDMzM2U3MDlmNTlkYTZhN2FmMGQ2ZDhkOTFj"
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
