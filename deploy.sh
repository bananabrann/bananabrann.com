#!/bin/bash
# GREEN = "\e[32m"
# BOLD = "\e[1m"
# CLEAR="\033[0m"

# To use this script, please see the "Deploying" section in the README

DIR="$(cd -P "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
npm run-script build && aws s3 sync $DIR/build s3://bananabrann.com

printf "\n\e[32m\e[1mdeploy.sh complete\033[0m\n"
