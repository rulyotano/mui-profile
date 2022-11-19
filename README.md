[![Build and push mui-profile/out to rulyotano.github.io](https://github.com/rulyotano/mui-profile/actions/workflows/master_mui-profile.yml/badge.svg)](https://github.com/rulyotano/mui-profile/actions/workflows/master_mui-profile.yml)

# mui-profile
My web profile done with Material-UI

[rulyotano.com](https://rulyotano.com)

## What is this?
- This is a web app built with React on Next platform. Used Material UI library and TypeScript
- Can be used as a template for other dev (or not) summary pages (but it is still on development and have a lot of things to improve)
- The main data source is two files named `src/gravatar.json` and `src/data.json`, but also have a very few data hardcoded. For sure this will be improved in the future
- This project is built and deployed automatically to my `.github.io` repo. In order to get this working, in the build command are created two files needed for getting the `Next` project working on `GithubPages`: `.nojekyll` and `CNAME` (the `CNAME` file is only needed if you publish your `GithubPages` site to your own domain, you will need to change it). The `.nojekyll` is something needed for enabling javascript
- You could also configure the github action I have here, in order to automatically publish to your `.github.io` site. I used this [custom action](https://github.com/cpina/github-action-push-to-another-repository) for pushing to the other github repo
