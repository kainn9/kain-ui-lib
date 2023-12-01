# Disclaimer
Like many of my side projects, this UI library was primarily crafted for learning purposes. Although it found its place on my personal website/portfolio, I must confess some reservations about its implementation. In retrospect, my approach to scoping/leaky styles may have been a bit unconventional and excessive—possibly influenced by past challenges with tailwind's preflight styles that left a lasting impression. Additionally, the Golang templater I employed is admittedly lacks readability. However, despite these considerations, the library remains somewhat functional, and I appreciate the convenience of hosting a Storybook preview build via S3/CloudFront that deploys through GitHub Actions!


# What is this?
This is a React/Sass UI library that contains a collection of fun and random reusable components. The IAC (Terraform) included in the repository is used to stand up the S3/Cloudfront infrastructure that hosts the Storybook preview, while GitHub Actions workflows are responsible for deploying the library, both by deploying the build to AWS and releasing the package on GitHub.

The Jest tests and IAC were written for practice purposes, although they are functional.

Additionally, this library is available for installation as a JavaScript package via GitHub Packages. The primary goal of this project is to provide a collection of fun and random reusable components for use in React applications. For example, these components have been used on my personal website.


## Preview Build:
- Can be found [here](https://d2qhtb7c0usx4g.cloudfront.net/?path=/story/baseloader--water-dragon)
## Installation
- In order to access the github registry, add a `.npmrc` file in project root and include:
```bash
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN} # GITHUB_TOKEN a PAT set as env variable(likely in shell config)
@kainn9:registry=https://npm.pkg.github.com
```
- Latest version can be found [here](https://github.com/users/kainn9/packages/npm/package/kain_ui_lib)
- And installed like:
```bash
npm install @kainn9/kain_ui_lib@x.x.x
-or-
yard add @kainn9/kain_ui_lib@x.x.x
-or-
# add dep to package.json:
"@kainn9/kain_ui_lib": "x.x.x"
# and then run
yarn install -or- npm install
```
- Make sure to include stylesheet:
```scss
// Root SASS File
@import "@kainn9/kain_ui_lib/dist/ui_styles";
```

## Adding a component with ComponentHelper
- requires golang(used for cli script)
- run `package.json script` "mc"(make component)
```bash
yarn run mc
-or-
npm run mc
```
- follow prompts, and script will create scaffold for you(imports, tsx, scss, storybook-story, jest-test, etc):

https://user-images.githubusercontent.com/85503587/236707200-7d23e441-0643-452e-9c6e-ef241e7f8a24.mp4

- ^Song used in [video](https://www.youtube.com/watch?v=qs2nau-ior4)(lol)
