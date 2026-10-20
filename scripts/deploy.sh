#!/usr/bin/env bash
# Build the site and publish the dist folder to the gh-pages branch.
# GitHub Pages serves that branch at zerosmokeapp.com.
#
# Usage: npm run deploy

set -euo pipefail

cd "$(dirname "$0")/.."

BRANCH="gh-pages"
REMOTE="origin"
WORKTREE="$(mktemp -d "${TMPDIR:-/tmp}/zerosmoke-deploy.XXXXXX")"

cleanup() {
  git worktree remove --force "$WORKTREE" 2>/dev/null || true
  rm -rf "$WORKTREE"
}
trap cleanup EXIT

echo "Building..."
npm run build

echo "Preparing $BRANCH worktree..."
git fetch -q "$REMOTE" "$BRANCH"
git worktree add -q --detach "$WORKTREE" "$REMOTE/$BRANCH"

# Replace the branch contents with the fresh build.
git -C "$WORKTREE" rm -rq .
cp -R dist/. "$WORKTREE"/
git -C "$WORKTREE" add -A

if git -C "$WORKTREE" diff --cached --quiet; then
  echo "Nothing to deploy: $BRANCH already matches the build."
  exit 0
fi

SOURCE_COMMIT="$(git rev-parse --short HEAD)"
git -C "$WORKTREE" commit -q -m "Deploy production build (main@$SOURCE_COMMIT)"
git -C "$WORKTREE" push "$REMOTE" "HEAD:$BRANCH"

echo "Deployed main@$SOURCE_COMMIT to $BRANCH. GitHub Pages updates in about a minute."
