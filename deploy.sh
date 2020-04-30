DIR="$(cd -P "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# bash build.sh
aws s3 rm s3://bananabrann.com --recursive
aws s3 sync $DIR/dist s3://bananabrann.com

printf "\e[32m\e[1mdeploy.sh complete\033[0m\n"
