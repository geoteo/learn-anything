# Learn Anything

> App to share what you know or want to learn next. Together with ideas you want to build.

Code structure is:

```
prisma -- db (Prisma)
 ├─ schema.prisma -- data model
src -- front end (Solid + tRPC)
```

Front end is built with [Solid](https://www.solidjs.com) on top of [Solid Start](https://github.com/solidjs/solid-start) and [Create JD app](https://github.com/OrJDev/create-jd-app).

## Quick Start

Assuming you have [pnpm](https://pnpm.io).

```
pnpm i
pnpm run dev
```

Open http://localhost:3000.

To open Prisma studio, run `pnpm prisma studio`.

## DB Model

Model is defined in [model.ts](prisma/schema.prisma) file.

The current thinking is to basically translate [this wiki](https://wiki.nikiv.dev) into LA fully.

There are users. User owns topics.

Take [Solid](https://wiki.nikiv.dev/programming-languages/javascript/js-libraries/solid) topic as example.

Each topic owned by user can be public/private. It can have content which is a markdown string. In case of Solid file above it is everything until [## Notes](https://wiki.nikiv.dev/programming-languages/javascript/js-libraries/solid#notes).

Then each topic optionally can have a list of notes. A note is basically a string with optional URL attached.

Each topic can also have links. Link has title, url and optional description.

In future the model will be more complex to include more features but above should be enough to move the [enormous wiki of 1,000 pages](https://wiki.nikiv.dev) to LA. It's the current focus of the project.

## Development

If above interested you, join our [Discord](https://discord.gg/bxtD8x6aNF). We can discuss how you can best help out.

There are currently closed off issues done in [Height](https://height.app) as it's nicer tool than GitHub issues to manage. For time being at least.
