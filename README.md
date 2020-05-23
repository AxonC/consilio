# consilio

UI Kit for VATSIM UK Services.

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

This project provides:

- Common CSS styles using Tailwind CSS w/ custom config
- Color pallete & spacing standards
- Common Vue components to be used in projects as a package.

## Project setup

It is suggested to use Node Version Manager.
To select the supported version of node for the project, run `nvm use`
and the `.nvmrc` file in the root of the project will tell node which version to use.

After this, the dependencies can be installed.

```
yarn install
```

## To setup a playground for development

```
cp src/Playground.example.vue src/Playground.vue
```

This will copy the Playground.vue component to be used.

Start the playground

```
yarn run playground
```

Insert any component you are working on into this file. Any changes are set to be ignored by default so don't worry about committing any of these changes.

### Lints and fixes files

The repository is setup to automatically lint your files on save.
Should it not do this, run the following command to activate the linting.

```
yarn lint
```

## Committing to repository

This repo is [commitizen-friendly](https://github.com/commitizen/cz-cli).
Each commit must be made via commitizen style commit. This can be activated by running to activate the commitizen menu.

```
git cz or yarn commit
```

## Deployment steps

Before deploying, ensure logged into the package registry with a token which allows pushing to the registry.

1. Ensure all changes are present on master
2. Run `yarn publish --new-version=<VERSION>` to generate a
   changelog, generate relevant git tag and publish to the package registry
3. Run `git push origin --tags` to publish the git tag to the repository

This will now have published the package to the registry.
