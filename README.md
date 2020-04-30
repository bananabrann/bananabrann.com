# BananaBrann.com
Originally built in React, I've recently downsized it to just regular HTML. The upkeep on a simple site was not worth the payout.

# How to Install
The project uses basic HTML and CSS, with Webpack, Three.js, and AWS for hosting.

1. Simply install the Node dependencies: `npm install`

# Available Scripts
There are several scripts in package.json to help you with running this 

## `npm run build`

## `npm run deploy`
Calls scripts/deploy.sh, automatically deploying to AWS. With your private key ready, be sure and have AWS configured on your machine: `aws configure`

# Good Stuff:
Reset CloudFront Cache at all edge locations:
1. `aws cloudfront list-distributions`
1. `aws cloudfront create-invalidation --distribution-id=<id-here-without-brackets> --paths /*`