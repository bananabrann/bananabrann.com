# bananabrann.com
Welcome! This is the repo for my website, bananabrann.com. It's a very simple site, primarily used for other domains that are not necessarily public and/or known.

# Table of Contents
1. [How to Launch](#how-to-launch)
1. [How to Deploy](#how-to-deploy)
1. [Contributing](#contributing)

# How to Launch
This app is built with React and Typescript. If you have Node and NPM installed, you just simply `npm install` prior to starting the script. If you don't have Node, you will have to manually install dependencies to your system and then write a build script.

1. Launch React script with `npm start`

# How to Deploy
## Install the AWS CLI
**Linux:** `sudo apt install awscli`

**Windows** Who knows, really? If you have a Bash shell, you might be able to follow the Linux or Mac commands. If you're using Powershell or Command Line, god speed, warrior.

**Mac** Easier than Windows! Check out the AWS docs, I'm sure it's not that bad.

## EZ Deploy
There is a script that manages the deployment.

1. Ensure the config file is setup properly with `aws configure`
1. Execute `deploy.sh` with `./deploy.sh` or `bash deploy.sh`, or whatever your preferred method is.

# Contributing
There is not policy for contributions on this repo. If you feel so inclined to help, please simply make a pull request. Thank you very much!