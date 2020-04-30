# NOTE
# This script is for when I build SCSS capabilities,
# and include a src/ directory because it will need
# a build process


if [ ! -d "dist" ]; then
  mkdir dist
fi

rm -rf dist/*
webpack --mode production
cp -r src/*.css src/*.html src/*.pdf dist/
