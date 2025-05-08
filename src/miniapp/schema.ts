import { Schema } from "effect";

// Manifest from: https://github.com/farcasterxyz/miniapps/blob/main/packages/frame-core/src/manifest.ts
export const MetadataSchema = Schema.Struct({
  version: Schema.Literal("1").annotations({
    desription: "Mini App Manifest Version to use.",
  }),
  name: Schema.String.pipe(
    Schema.nonEmptyString(),
    Schema.maxLength(32),
  ).annotations({
    description: "App name that will be displayed to users",
  }),
  homeUrl: Schema.URL.pipe(
    Schema.filter(
      (homeUrl) =>
        homeUrl.toString().length <= 1024 ||
        "homeUrl can be max 1024 characters!",
    ),
  ).annotations({
    description: "Default launch URL - in Feed, DC's overriden by <meta> tags.",
  }),
  iconUrl: Schema.URL.pipe(
    Schema.filter(
      (iconUrl) =>
        iconUrl.toString().length <= 1024 ||
        "iconUrl can be max 1024 characters!",
    ),
  ).annotations({
    description:
      "Max length of 1024 characters. Image must be 200x200px and less than 1MB.",
  }),
  imageUrl: Schema.URL.pipe(
    Schema.filter(
      (imageUrl) =>
        imageUrl.toString().length <= 1024 ||
        "imageUrl can be max 1024 characters!",
    ),
  ).annotations({
    description: "Max length of 1024 characters. Image must have a 3:2 ratio",
  }),
  buttonTitle: Schema.String.pipe(
    Schema.nonEmptyString(),
    Schema.maxLength(32),
  ).annotations({
    description: "Default button title to use when frame is rendered.",
  }),
  splashImageUrl: Schema.optional(
    Schema.URL.pipe(
      Schema.filter(
        (splashImageUrl) =>
          splashImageUrl.toString().length <= 1024 ||
          "splashImageUrl can be max 1024 characters!",
      ),
    ),
  ).annotations({
    description:
      "Max length of 1024 characters. Image must be 200x200px and less than 1MB.",
  }),
  splashBackgroundColor: Schema.optional(
    Schema.String.pipe(
      Schema.filter(
        (color) =>
          /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(color) ||
          "splashBackgroundColor must be a valid hex color code (#RGB or #RRGGBB)",
      ),
    ),
  ).annotations({
    description:
      "Background color of the loading screen shown for mini apps. Must be a hex color code.",
  }),
  webhookUrl: Schema.optional(
    Schema.URL.pipe(
      Schema.filter(
        (webhookUrl) =>
          webhookUrl.toString().length <= 1024 ||
          "webhookUrl can be max 1024 characters!",
      ),
    ),
  ).annotations({
    description:
      "URL to which clients will POST server events. Required if the frame application uses notifications.",
  }),
});

export const AccountAssociationSchema = Schema.Struct({
  header: Schema.String,
  payload: Schema.String,
  signature: Schema.String.annotations({
    description: "Base64URL encoded signature",
  }),
});

export const ManifestSchema = Schema.Struct({
  accountAssociation: AccountAssociationSchema,
  frame: MetadataSchema,
});

export type ManifestType = typeof ManifestSchema.Type;
// end of Manifest

// Embed from: https://github.com/farcasterxyz/miniapps/blob/main/packages/frame-core/src/schemas/embeds.ts

// Basic utility schemas
export const secureUrlSchema = Schema.URL.pipe(
  Schema.filter(
    (url) =>
      (url.toString().startsWith("https://") &&
        url.toString().length <= 1024) ||
      "Must be an https url with max 1024 characters.",
  ),
);

export const frameNameSchema = Schema.String.pipe(Schema.maxLength(32));

export const buttonTitleSchema = Schema.String.pipe(Schema.maxLength(32));

export const hexColorSchema = Schema.String.pipe(
  Schema.filter(
    (color) =>
      /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(color) ||
      "splashBackgroundColor must be a valid hex color code (#RGB or #RRGGBB)",
  ),
);

export const aspectRatioSchema = Schema.Union(
  Schema.Literal("1:1"),
  Schema.Literal("3:2"),
);

const CAIP_19_REGEX =
  /^[-a-z0-9]{3,8}:[-_a-zA-Z0-9]{1,32}\/(?:[-a-z0-9]{3,8}:[-.%a-zA-Z0-9]{1,128}(?:\/[-.%a-zA-Z0-9]{1,78})?|native)$/;

export const caip19TokenSchema = Schema.String.pipe(
  Schema.pattern(CAIP_19_REGEX || "Invalid CAIP-19 asset ID"),
);

// Action schemas
export const actionLaunchFrameSchema = Schema.Struct({
  type: Schema.Literal("launch_frame"),
  name: frameNameSchema,
  url: Schema.optional(secureUrlSchema),
  splashImageUrl: Schema.optional(secureUrlSchema),
  splashBackgroundColor: Schema.optional(hexColorSchema),
});

export const actionViewTokenSchema = Schema.Struct({
  type: Schema.Literal("view_token"),
  token: caip19TokenSchema,
});

export const actionSchema = Schema.Union(
  actionLaunchFrameSchema,
  actionViewTokenSchema,
);

export const buttonSchema = Schema.Struct({
  title: buttonTitleSchema,
  action: actionSchema,
});

export const frameEmbedNextSchema = Schema.Struct({
  version: Schema.Literal("next"),
  imageUrl: secureUrlSchema,
  aspectRatio: Schema.optional(aspectRatioSchema),
  button: buttonSchema,
});

export type FrameEmbedNext = typeof frameEmbedNextSchema.Type;
// end of Embed
