DIR="$(cd -P "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

aws s3 rm s3://bananabrann.com --recursive

# NOTE
# Normally we would want $DIR/dist, but because this script
# will be executed by npm run scripts, this needs to be 
# called from the parent dir

aws s3 sync dist s3://bananabrann.com

printf "\e[32m\e[1mdeploy.sh complete\033[0m\n"
