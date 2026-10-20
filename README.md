# ZeroSmoke website

Marketing and legal pages for the ZeroSmoke iOS app, live at [zerosmokeapp.com](https://zerosmokeapp.com).

Built with React, TypeScript, Vite, and React Bootstrap. Routing uses a hash router so the site works as static files on GitHub Pages.

## Pages

| Route | File |
| --- | --- |
| `/#/` | `src/pages/Home.tsx` |
| `/#/terms` | `src/pages/Terms.tsx` |
| `/#/privacy` | `src/pages/Privacy.tsx` |
| `/#/support` | `src/pages/Support.tsx` |

The support email address lives in `src/config.ts`.

## Local development

```sh
npm install
npm run dev
```

Open <http://localhost:5173/>. Changes reload automatically.

Other scripts:

```sh
npm run build    # type-check and build to dist/
npm run preview  # serve the production build locally
npm run lint     # run ESLint
```

## Deploy

The live site is served by GitHub Pages from the `gh-pages` branch. Pushing to `main` does **not** update the site on its own.

To deploy:

1. Commit your changes to `main` and push.
2. Run:

   ```sh
   npm run deploy
   ```

The script in `scripts/deploy.sh`:

1. Builds the site into `dist/`.
2. Checks out `gh-pages` in a temporary worktree.
3. Replaces the branch contents with the fresh build.
4. Commits with a message that references the `main` commit, and pushes.
5. Removes the temporary worktree, also if a step fails.

If `gh-pages` already matches the build, the script stops and reports that nothing changed.

GitHub Pages publishes the new build about a minute after the push. Browsers may cache the old page for up to ten minutes; a hard reload shows the new version.

**Caution:** the script deploys the current working tree, including uncommitted changes. Commit to `main` first so the live site always matches a commit.

## Hosting notes

- DNS for `zerosmokeapp.com` points to GitHub Pages. The `CNAME` file in `public/` is copied into every build so the custom domain stays configured.
- A Netlify project also builds this repository on every push, but the domain does not point at it, so those deploys have no effect on the live site.

## Content to replace before promoting the site

The testimonials on the home page are placeholder text with stock portraits from Unsplash. Replace them with real user messages and photos, with permission, or remove the section. The data lives at the top of `src/pages/Home.tsx` and the photos in `public/avatars/`.
