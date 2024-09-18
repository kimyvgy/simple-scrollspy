# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.5.2](https://github.com/kimyvgy/simple-scrollspy/compare/v2.5.1...v2.5.2) (2024-09-18)


### Bug Fixes

* add the previously missing build output files in NPM package ([c85ffe4](https://github.com/kimyvgy/simple-scrollspy/commit/c85ffe4b16e02040d0a325c877727301ba8095f8))

### [2.5.1](https://github.com/kimyvgy/simple-scrollspy/compare/v2.5.0...v2.5.1) (2024-09-18)


### Bug Fixes

* v2.5.0 breaks implementation with headings ([48cd9a2](https://github.com/kimyvgy/simple-scrollspy/commit/48cd9a270a2d9445be59190baffd3eff868950f9)), closes [#59](https://github.com/kimyvgy/simple-scrollspy/issues/59)

## [2.5.0](https://github.com/kimyvgy/simple-scrollspy/compare/v2.4.2...v2.5.0) (2024-07-06)


### Features

* Full conversion to TypeScript [#39](https://github.com/kimyvgy/simple-scrollspy/issues/39) ([#53](https://github.com/kimyvgy/simple-scrollspy/issues/53)) ([e6d7bc6](https://github.com/kimyvgy/simple-scrollspy/commit/e6d7bc6bf4c5aae4588a49551d591e17f28e2f1b))


### Bug Fixes

* the menu item's active status ([5c3b5c1](https://github.com/kimyvgy/simple-scrollspy/commit/5c3b5c154f8626afab1dd3b0aafe48a68b47291c))

### [2.4.2](https://github.com/kimyvgy/simple-scrollspy/compare/v2.4.1...v2.4.2) (2023-12-13)


### Bug Fixes

* Type definition of Options.scrollContainer ([19251a0](https://github.com/kimyvgy/simple-scrollspy/commit/19251a0eaed870da6ad96a1bae81bcb1900e0ecd))


### Refactors

* Add prerelease hook ([2f7fa63](https://github.com/kimyvgy/simple-scrollspy/commit/2f7fa631fed32d23f70884a45a82270c4487b767))

### [2.3.6](https://github.com/kimyvgy/simple-scrollspy/compare/v2.3.5...v2.3.6) (2023-02-18)


### Bug Fixes

* .npmignore /demo (2) ([01111e2](https://github.com/kimyvgy/simple-scrollspy/commit/01111e299e703064d12214423b875403c384a507))

### [2.3.5](https://github.com/kimyvgy/simple-scrollspy/compare/v2.3.4...v2.3.5) (2023-02-18)

Support CDN.js by adding dist folder to NPM package. CDN.js will auto-fetch dist/simple-scrollspy.min.js for each new version

### [2.3.4](https://github.com/kimyvgy/simple-scrollspy/compare/v2.3.3...v2.3.4) (2023-02-13)

### [2.3.3](https://github.com/kimyvgy/simple-scrollspy/compare/v2.3.2...v2.3.3) (2022-10-13)


### Refactors

* **actions:** auto-publish package to npmjs ([b89f282](https://github.com/kimyvgy/simple-scrollspy/commit/b89f282d4d1c9f5130ee237083fd145d4d236536))

### [2.3.2](https://github.com/kimyvgy/simple-scrollspy/compare/v2.3.1...v2.3.2) (2022-10-03)


### Bug Fixes

* .npmignore does not publish /src/scrollspy.js ([e9c67ca](https://github.com/kimyvgy/simple-scrollspy/commit/e9c67caba25fda812245d74ff9cf1a04a2b4b9a2))

### [2.3.1](https://github.com/kimyvgy/simple-scrollspy/compare/v2.3.0...v2.3.1) (2022-10-03)


### Bug Fixes

* optimize .npmignore ([58c8510](https://github.com/kimyvgy/simple-scrollspy/commit/58c8510335c138947ba57e01b5b6e384eff35663))

## [2.3.0](https://github.com/kimyvgy/simple-scrollspy/compare/v2.2.0...v2.3.0) (2022-10-03)


### Features

* upgrade to webpack v5 ([2704961](https://github.com/kimyvgy/simple-scrollspy/commit/27049619dbb04f42a7a054b87d39be103dff07c9))


### Refactors

* CI with Github Actions ([#27](https://github.com/kimyvgy/simple-scrollspy/issues/27)) ([415daad](https://github.com/kimyvgy/simple-scrollspy/commit/415daaddfbf6487e2435ca6953e767496024cdbf))

## [2.1.0](https://github.com/kimyvgy/simple-scrollspy/compare/v2.0.3...v2.1.0) (2021-03-22)


### Features

* adding some functionality for allowing user to define a scrollContainer ([#17](https://github.com/kimyvgy/simple-scrollspy/issues/17)) ([31e39d7](https://github.com/kimyvgy/simple-scrollspy/commit/31e39d76d1e2b5adf5b5ea8dd2da7ae32ea59a97))


### Bug Fixes

* [#12](https://github.com/kimyvgy/simple-scrollspy/issues/12) Custom active class not removed for previously selected menu items ([#13](https://github.com/kimyvgy/simple-scrollspy/issues/13)) ([1cec086](https://github.com/kimyvgy/simple-scrollspy/commit/1cec0860e4e33cdda6f34322e18402e51129e224))
* defining non-existing 'scrollContainer' will work ([2d3c408](https://github.com/kimyvgy/simple-scrollspy/commit/2d3c4088cb4c4fcaed175c8e1f1740534533ad9a))
* the demo is not working in the localhost ([41cf4b3](https://github.com/kimyvgy/simple-scrollspy/commit/41cf4b335a65533a164a5030836bfb4585249f83))

## [2.0.3](https://github.com/kimyvgy/simple-scrollspy/compare/2.0.2...2.0.3) (2019-09-26)

- empty: remove yarn.lock [`80e1fc9`](https://github.com/kimyvgy/simple-scrollspy/commit/80e1fc9300cba5f45067f9bfd4ef499880c76a6a)
- chore(deps): fix potetial security vulnerablilities issues [`08e046e`](https://github.com/kimyvgy/simple-scrollspy/commit/08e046e76b8c5a41736f8948673b4188fcd2f331)
- release: v2.0.3 [`77958bc`](https://github.com/kimyvgy/simple-scrollspy/commit/77958bc5ba7cf4e4c4a9b27502a438bab6c5aa31)

## [2.0.2](https://github.com/kimyvgy/simple-scrollspy/compare/2.0.1...2.0.2) (2019-09-19)

- vendor(security): ump stringstream from 0.0.5 to 0.0.6 [`#4`](https://github.com/kimyvgy/simple-scrollspy/pull/4)
- vendor(security): bump extend from 3.0.1 to 3.0.2 [`#5`](https://github.com/kimyvgy/simple-scrollspy/pull/5)
- vendor(security): bump fstream from 1.0.11 to 1.0.12 [`#6`](https://github.com/kimyvgy/simple-scrollspy/pull/6)
- vendor(security): bump lodash from 4.17.5 to 4.17.15 [`#2`](https://github.com/kimyvgy/simple-scrollspy/pull/2)
- docs: fix wrong link in README.md [`90bfb4d`](https://github.com/kimyvgy/simple-scrollspy/commit/90bfb4dee68be4b408bf325913f446ff381731d3)
- chore: update homepage url in package.json [`5916b0d`](https://github.com/kimyvgy/simple-scrollspy/commit/5916b0dbda726dbd257bcfc49f6d5f2ff65a81e5)
- chore: update keywords for NPM [`fd2fb32`](https://github.com/kimyvgy/simple-scrollspy/commit/fd2fb325c1db274e8af141dd9dd6492d559720b7)

## [2.0.1](https://github.com/kimyvgy/simple-scrollspy/compare/2.0.0...2.0.1) (2019-02-18)

- Fix: Error is thrown when menu item can not be found [`cc01244`](https://github.com/kimyvgy/simple-scrollspy/commit/cc01244f684c9945f95d76993469460326a5d5d1)
- Version 2.0.1 [`d6fd283`](https://github.com/kimyvgy/simple-scrollspy/commit/d6fd2832035525de638615f50460aec4ff41d84f)
- Update README.md [`34b0e86`](https://github.com/kimyvgy/simple-scrollspy/commit/34b0e864cfc976d3fcf8e0c2f9e4f75c89c5c573)

## [2.0.0](https://github.com/kimyvgy/simple-scrollspy/compare/1.0.1...2.0.0) (2019-02-16)

- Fix data-scrollspy issue and refactor code [`adb6b5b`](https://github.com/kimyvgy/simple-scrollspy/commit/adb6b5b02ee8b76305f2e14c4a702149d8495e4c)
- Fix github page [`ae335f2`](https://github.com/kimyvgy/simple-scrollspy/commit/ae335f2f46598435f2d394d56ee3c4926b8d7c63)
- Version 2.0.0 [`2b86f08`](https://github.com/kimyvgy/simple-scrollspy/commit/2b86f083499d1f3b30b49f9b08d9edb8278e3d71)

## [1.0.1](https://github.com/kimyvgy/simple-scrollspy/compare/1.0.0...1.0.1) (2018-03-31)

- Fix typo [`61987a1`](https://github.com/kimyvgy/simple-scrollspy/commit/61987a14df8282758d4b56d7a12dcd1b403ebe8e)

## 1.0.0 (2018-03-31)

- Create Simple Scrollspy [`d34cd3c`](https://github.com/kimyvgy/simple-scrollspy/commit/d34cd3cbb182e92068b445a1a2fb285337cf8036)
- Update README.md [`83bba5c`](https://github.com/kimyvgy/simple-scrollspy/commit/83bba5c75c68a0f68d238213d25a2883a2ce84e5)
- Initial commit [`ad837a9`](https://github.com/kimyvgy/simple-scrollspy/commit/ad837a9746fb2b6c63ed6e6f80bf88c0a87c3ae6)
