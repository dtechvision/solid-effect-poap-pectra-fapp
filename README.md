# Full-stack Solid.js with Effect Bundler & Bun

>This specific UI is taken from https://github.com/etheralpha/ethereumupgrades-com/ and ported to a mini app based on the Effect Bundler Stack.

A declarative full-stack Effect.ts and Solid.js with:

 - server-side rendering,
 - distributed observability,
 - fast development and production builds (thanks to Bun),
 - live reloading for great development experience and no restarts between edits.

Our philosophy is this: Effect is good and if you relay on it your software will be good too.

One of the thing that distinguish Effect Bundler from other full-stack frameworks is that it's not a framework, it's a library. There are no config files or structure that you have to adhere to.

There's no under-the-hood or magic. Everything that happens starts in `src/dev.ts`. What you see is what you get.

Effect Bundler provides composable fully effectful abstractions that you can use in your app without being forced to go all in. 


# Usage

```sh
# Install all dependencies
bun install


# start a development server
bun run dev
```

# Production

To build an app for production, run `bun run build`.

This will create two directories in `out/` for server and client production build.

Currently, the best way to deploy it is to run the build directly with bun. Support for serverless platforms like Cloudflare is coming soon.

To start a production build, run `bun out/server/server.js` from our desired environment, like Docker. This will start a sever and expose `out/client` build through the server.






