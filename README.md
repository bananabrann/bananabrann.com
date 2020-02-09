# bananabrann.com
Welcome! This is the repo for my website, bananabrann.com. It's a very simple site, primarily used for other domains that are not necessarily public and/or known.

# Table of Contents
1. [How to Install](#how-to-install)
1. [How to Launch](#how-to-launch)
1. [How to Deploy](#how-to-deploy)
1. [Contributing](#contributing)

# How to Install
## Mac and Linux
**With Node installed:**
`git clone git@github.com:bananabrann/bananabrann.com.git && cd ./bananabrann.com && npm install && npm start`

**Install Node with Homebrew:**
`brew install node`

**Install Homebrew (MacOS):**
`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" && export PATH="/usr/local/bin:$PATH"`
> To verify successful installation, run `brew --version`

## Windows
Download a Linux.

# How to Launch
1. Launch React script with `npm start`


# How to Deploy
## Install the AWS CLI
### Linux and MacOS
1. Download the AWS CLI with `sudo apt install awscli` or `sudo snap install aws-cli`
### Windows
1. Who knows, really? If you have a Bash shell, you might be able to follow the Linux or Mac commands. If you're using Powershell or Command Line, god speed, warrior.

## EZ Deploy
There is a script that manages the deployment.

1. Ensure the config file is setup properly with `aws configure`
1. Execute `deploy.sh` with `./deploy.sh` or `bash deploy.sh`, or whatever your preferred method is.

# Contributing
There is not policy for contributions on this repo. If you feel so inclined to help, please simply make a pull request. Thank you very much!
