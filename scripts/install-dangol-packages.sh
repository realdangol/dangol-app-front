#!/bin/bash

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"


set -o allexport
source "$ROOT_DIR/.env"
set +o allexport

GITHUB_USERNAME="realdangol"
IS_DEV=false
TARGET_SUBDIR=""
PACKAGES=()

while [[ $# -gt 0 ]]; do
  case "$1" in
    -D|--dev)
      IS_DEV=true
      shift
      ;;
    -root)
      TARGET_SUBDIR="."
      shift
      ;;
    -web)
      TARGET_SUBDIR="web"
      shift
      ;;
    -mobile)
      TARGET_SUBDIR="mobile"
      shift
      ;;
    *)
      PACKAGES+=("$1")
      shift
      ;;
  esac
done

if [ -z "$TARGET_SUBDIR" ]; then
  echo "설치 위치를 지정하세요. (-root, -web, -mobile)"
  exit 1
fi

if [ ${#PACKAGES[@]} -eq 0 ]; then
  echo "설치할 패키지를 지정하세요."
  exit 1
fi

TARGET_DIR="$ROOT_DIR/$TARGET_SUBDIR"

trap 'echo "//npm.pkg.github.com/:_authToken=\${NODE_AUTH_TOKEN}" > "$ROOT_DIR/.npmrc"; \
      echo "@$GITHUB_USERNAME:registry=https://npm.pkg.github.com/" >> "$ROOT_DIR/.npmrc"; \
      echo "always-auth=true" >> "$ROOT_DIR/.npmrc"' EXIT

echo "//npm.pkg.github.com/:_authToken=$GITHUB_TOKEN" > "$ROOT_DIR/.npmrc"
echo "@$GITHUB_USERNAME:registry=https://npm.pkg.github.com/" >> "$ROOT_DIR/.npmrc"
echo "always-auth=true" >> "$ROOT_DIR/.npmrc"

echo "설치 경로: $TARGET_DIR"
cd "$TARGET_DIR" || exit 1

if [ "$IS_DEV" = true ]; then
  if [ "$TARGET_SUBDIR" = "." ]; then
    pnpm add -D -w "${PACKAGES[@]}"
  else
    pnpm add -D "${PACKAGES[@]}"
  fi
else
  if [ "$TARGET_SUBDIR" = "." ]; then
    pnpm add -w "${PACKAGES[@]}"
  else
    pnpm add "${PACKAGES[@]}"
  fi
fi

echo "//npm.pkg.github.com/:_authToken=\${NODE_AUTH_TOKEN}" > "$ROOT_DIR/.npmrc"
echo "@$GITHUB_USERNAME:registry=https://npm.pkg.github.com/" >> "$ROOT_DIR/.npmrc"
echo "always-auth=true" >> "$ROOT_DIR/.npmrc"
