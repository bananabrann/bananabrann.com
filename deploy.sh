#!/bin/bash
# GREEN = "\e[32m"
# BOLD = "\e[1m"
# CLEAR="\033[0m"

npm run-script build
aws s3 sync /Users/pi/Dev/bananabrann.com/build s3://bananabrann.com

printf "\n\e[32m\e[1mBuild and deploy sucessful!\033[0m\n"
