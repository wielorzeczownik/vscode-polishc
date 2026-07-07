# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.11](https://github.com/wielorzeczownik/vscode-polishc/compare/v0.1.10...v0.1.11) - 2026-07-07

### Build System

- Update dependency prettier to v3.9.4 ([d88599c](https://github.com/wielorzeczownik/vscode-polishc/commit/d88599c6ec6564476a8b7c5b6d9d41dd0a37723c))
- Update dependency vite to v8.1.3 ([f59160b](https://github.com/wielorzeczownik/vscode-polishc/commit/f59160b2301d299ba8a6d752221a601d05bdd0ea))
- Update dependency @types/node to v26.1.0 ([bd60fc1](https://github.com/wielorzeczownik/vscode-polishc/commit/bd60fc13724b76c3e9024890f60a794dd555bb3e))
- Update dependency eslint to v10.6.0 ([f3e521c](https://github.com/wielorzeczownik/vscode-polishc/commit/f3e521cd56dfc594e0c2b15a55734a87b80224a7))
- Update dependency typescript-eslint to v8.62.1 ([5442e5f](https://github.com/wielorzeczownik/vscode-polishc/commit/5442e5fa4e8070beeea5e2bc2a5ce70d7ce565d7))

### CI/CD

- Update softprops/action-gh-release action to v3.0.1 ([5a3115c](https://github.com/wielorzeczownik/vscode-polishc/commit/5a3115cb91ee342cfe8902fe6979a6bc0ab60de0))
- Exclude generated CHANGELOG.md from markdownlint ([9b3bf9d](https://github.com/wielorzeczownik/vscode-polishc/commit/9b3bf9da6f2ebdc877b0929eabc89c5101c4ac39))

### Dependencies

- Update dependency vscode-languageclient to v10.1.0 (#74) ([33792f6](https://github.com/wielorzeczownik/vscode-polishc/commit/33792f602a7b5ef2ad99a4786a11fcfce2d94ce2))

## [0.1.10](https://github.com/wielorzeczownik/vscode-polishc/compare/v0.1.9...v0.1.10) - 2026-07-07

### Bug Fixes

- Avoid prefer-minimal-ternary without losing type narrowing ([89ff1db](https://github.com/wielorzeczownik/vscode-polishc/commit/89ff1db9be0c72e6843c41384c09ecd8e38add4c))

### Refactoring

- Colocate single-use constants and types with their modules ([b5c73cf](https://github.com/wielorzeczownik/vscode-polishc/commit/b5c73cf869f6b683aba2aa923e26d12dc8fd3bc4))

### Build System

- Update dependency eslint-plugin-unicorn to v68 ([97a5c8a](https://github.com/wielorzeczownik/vscode-polishc/commit/97a5c8aa8045cef1bf52d829ab1603c17067e025))

### CI/CD

- Add changelog, build attestations and SHA-256 checksums to releases ([7645d27](https://github.com/wielorzeczownik/vscode-polishc/commit/7645d27a50869bd11b9494a839e31ba216ea9f7e))
- Update actions/checkout action to v7 ([e68bda9](https://github.com/wielorzeczownik/vscode-polishc/commit/e68bda99edb3d849b4d15f8f4ccfa16eef3533be))

## [0.1.9](https://github.com/wielorzeczownik/vscode-polishc/compare/v0.1.8...v0.1.9) - 2026-06-22

### Bug Fixes

- Resolve eslint-plugin-unicorn v68 breaking changes ([7fbb3b7](https://github.com/wielorzeczownik/vscode-polishc/commit/7fbb3b7051657feac7275057a7a16eef8deab466))

## [0.1.8](https://github.com/wielorzeczownik/vscode-polishc/compare/v0.1.7...v0.1.8) - 2026-06-22

### Bug Fixes

- Resolve eslint-plugin-unicorn v68 breaking changes ([b9501a6](https://github.com/wielorzeczownik/vscode-polishc/commit/b9501a620e9d09a4e8a34060d4e788f32c9887e0))

## [0.1.7](https://github.com/wielorzeczownik/vscode-polishc/compare/v0.1.6...v0.1.7) - 2026-06-22

### Bug Fixes

- Resolve eslint-plugin-unicorn v68 breaking changes ([dbf7aae](https://github.com/wielorzeczownik/vscode-polishc/commit/dbf7aae4b041af737f2770b2a252f8f08a7ce15d))

## [0.1.6](https://github.com/wielorzeczownik/vscode-polishc/compare/v0.1.5...v0.1.6) - 2026-06-22

### Bug Fixes

- Resolve eslint-plugin-unicorn v68 breaking changes ([c76a154](https://github.com/wielorzeczownik/vscode-polishc/commit/c76a1547d80788eab055c7615f4f5f43c530d84b))

## [0.1.5](https://github.com/wielorzeczownik/vscode-polishc/compare/v0.1.4...v0.1.5) - 2026-06-22

### Bug Fixes

- Resolve eslint-plugin-unicorn v68 breaking changes ([fb03822](https://github.com/wielorzeczownik/vscode-polishc/commit/fb03822fe0e18f652e4e0e4b0f487180e37a5edf))

### Build System

- Update dependency @types/node to v26 ([d8afae1](https://github.com/wielorzeczownik/vscode-polishc/commit/d8afae19824e1b55dd5a93dbc729e4a59335b018))
- Update dependency eslint-plugin-sonarjs to v4.1.0 (#66) ([4c2212b](https://github.com/wielorzeczownik/vscode-polishc/commit/4c2212bf0bde0294c24b527d9e1d5cb6b3989f7a))
- Update dependency @types/vscode to v1.125.0 (#65) ([bb48d47](https://github.com/wielorzeczownik/vscode-polishc/commit/bb48d474f91655ab2e91ea4d1bd27ecdcda164a7))
- Update dependency typescript-eslint to v8.61.1 (#63) ([b3e46fe](https://github.com/wielorzeczownik/vscode-polishc/commit/b3e46febab1b689f5138a1bedbdd7de874bc700f))
- Resolve audit advisories ([75e72f8](https://github.com/wielorzeczownik/vscode-polishc/commit/75e72f88bea6046a5f3ffa3d9df66d9567cc0924))
- Update dependency eslint to v10.5.0 (#61) ([ed965d2](https://github.com/wielorzeczownik/vscode-polishc/commit/ed965d23d367bb3b2471b3124bc50a1213db7615))
- Resolve audit advisories ([1da57d2](https://github.com/wielorzeczownik/vscode-polishc/commit/1da57d22fc020bcb888461eb5fd1431f8572240a))
- Update dependency eslint-plugin-unicorn to v65 ([21aa61d](https://github.com/wielorzeczownik/vscode-polishc/commit/21aa61dff6df88d29e58a210f7376c05c90eb453))
- Update dependency @types/node to v25.9.3 (#60) ([6924c97](https://github.com/wielorzeczownik/vscode-polishc/commit/6924c979357227ca9b251fe908de4fd067df1ea6))
- Update dependency prettier to v3.8.4 (#59) ([b52cc74](https://github.com/wielorzeczownik/vscode-polishc/commit/b52cc744f2e10e66247f5191ef8be1b333592c65))
- Update dependency typescript-eslint to v8.61.0 (#58) ([45ca31c](https://github.com/wielorzeczownik/vscode-polishc/commit/45ca31c361b9c854d00846afab27f1679f73c47f))
- Update dependency @types/node to v25.9.2 (#55) ([929a659](https://github.com/wielorzeczownik/vscode-polishc/commit/929a6598f2ac2543f62234eadef6e4046a5ef446))

### CI/CD

- Update actions/checkout action to v6.0.3 (#56) ([02f0610](https://github.com/wielorzeczownik/vscode-polishc/commit/02f06107b558c7ec9f3b97e8102f27b001d13afc))

## [0.1.4](https://github.com/wielorzeczownik/vscode-polishc/compare/v0.1.3...v0.1.4) - 2026-06-07

### Bug Fixes

- Bump engines.vscode to match @types/vscode 1.120.0 ([18357d2](https://github.com/wielorzeczownik/vscode-polishc/commit/18357d220b646a066e41cb3f650c98358b17ab12))

## [0.1.3](https://github.com/wielorzeczownik/vscode-polishc/compare/v0.1.2...v0.1.3) - 2026-06-07

### Bug Fixes

- Update tsconfig moduleResolution for vscode-languageclient v10 ([bfb2a7e](https://github.com/wielorzeczownik/vscode-polishc/commit/bfb2a7e89dea86c10407e42bf297778f0c077a0e))

### Documentation

- Improve contributing guide and community files ([b905844](https://github.com/wielorzeczownik/vscode-polishc/commit/b905844b1fec77d2848f2ca46d9445eab99655e4))
- Update pull_request_template.md ([eeb17df](https://github.com/wielorzeczownik/vscode-polishc/commit/eeb17df4d7dbc95e662c0cae734397d74248711c))
- Update CONTRIBUTING, CODE_OF_CONDUCT, and PR template ([dcdfd2e](https://github.com/wielorzeczownik/vscode-polishc/commit/dcdfd2e75d33a3ae482ba79b48f5e2dfe7c29661))

### Styling

- Rename .prettierrc.json to .prettierrc ([074a39d](https://github.com/wielorzeczownik/vscode-polishc/commit/074a39da3319828c9812e11ad55e18d336d149a0))

### Build System

- Update dependency @vscode/vsce to v3.9.2 (#54) ([1000b9c](https://github.com/wielorzeczownik/vscode-polishc/commit/1000b9cbaf90b0a72e0b4ea82fdac07401832004))
- Update dependency typescript-eslint to v8.60.1 ([190c20e](https://github.com/wielorzeczownik/vscode-polishc/commit/190c20e3a1ae6309bb88d6a7320071cf66a95757))
- Update dependency vite to v8.0.16 (#51) ([daa70e6](https://github.com/wielorzeczownik/vscode-polishc/commit/daa70e6e3aefdb45c9ad5a91b20b8a477d4fb243))
- Update dependency vite to v8.0.15 (#50) ([4403ce6](https://github.com/wielorzeczownik/vscode-polishc/commit/4403ce6a609d1b3f39c349a481e95dd6fc17a396))
- Update dependency eslint to v10.4.1 (#49) ([637cd2b](https://github.com/wielorzeczownik/vscode-polishc/commit/637cd2b52e3f45e1f0f584aa550acf6a3b981f7f))
- Update dependency typescript-eslint to v8.60.0 (#48) ([f242b31](https://github.com/wielorzeczownik/vscode-polishc/commit/f242b3158d1d8420288775541f700b9bfc39307c))
- Resolve audit advisories ([4f1a99a](https://github.com/wielorzeczownik/vscode-polishc/commit/4f1a99a1766f0cc90c7b3d62a21ca0a155b88e1b))
- Update dependency vite to v8.0.14 (#47) ([929a11f](https://github.com/wielorzeczownik/vscode-polishc/commit/929a11f4ecec06b850aa11171445f464f595194e))
- Update dependency @types/node to v25.9.1 (#46) ([a91028a](https://github.com/wielorzeczownik/vscode-polishc/commit/a91028a50eb27b698343450c0de681a5d8825953))
- Resolve audit advisories ([10246d2](https://github.com/wielorzeczownik/vscode-polishc/commit/10246d25ac6ee90bee04dc656f5aa406221ba419))
- Update dependency typescript-eslint to v8.59.4 (#45) ([5e39eca](https://github.com/wielorzeczownik/vscode-polishc/commit/5e39eca3eebc2c37350a09237125854be0275871))
- Update dependency @types/node to v25.9.0 (#44) ([54380b5](https://github.com/wielorzeczownik/vscode-polishc/commit/54380b583ec68cbc3c65ec14b39559b1b27bf592))
- Update dependency eslint to v10.4.0 (#43) ([a8738fa](https://github.com/wielorzeczownik/vscode-polishc/commit/a8738faa2c5dbfe91b24fefaae65f76b83670f45))
- Resolve audit advisories ([8585f49](https://github.com/wielorzeczownik/vscode-polishc/commit/8585f49166a6574f46e10c681be6b2a57ca8c53d))
- Update dependency @types/node to v25.8.0 (#42) ([b624b57](https://github.com/wielorzeczownik/vscode-polishc/commit/b624b575cdf4fb116954175a91d50789bfe0ea50))
- Update dependency vite to v8.0.13 (#41) ([a6deeaa](https://github.com/wielorzeczownik/vscode-polishc/commit/a6deeaaec16df1697b96d494f659d3665b6fc0a3))
- Update dependency @types/vscode to v1.120.0 (#40) ([7ec1c90](https://github.com/wielorzeczownik/vscode-polishc/commit/7ec1c90a5ebdbc07f622853e32df94e8709b427b))
- Update dependency @types/node to v25.7.0 (#39) ([71b2ef6](https://github.com/wielorzeczownik/vscode-polishc/commit/71b2ef604104725d9d5e1181094b9fc8589cb601))
- Update dependency typescript-eslint to v8.59.3 (#38) ([f117561](https://github.com/wielorzeczownik/vscode-polishc/commit/f1175610e22c447765842d43a1edff4b3e629c33))
- Update dependency vite to v8.0.12 (#37) ([e955090](https://github.com/wielorzeczownik/vscode-polishc/commit/e955090ee0d8c5436568a72b39807fa9574f1c4b))
- Update dependency @types/node to v25.6.2 (#36) ([6ba414c](https://github.com/wielorzeczownik/vscode-polishc/commit/6ba414cd576ae35c79b119e94ac7c0f9cfbd78ac))
- Update dependency @types/node to v25.6.1 ([031455a](https://github.com/wielorzeczownik/vscode-polishc/commit/031455a734afda6c2b9f076f79532eea76e6ef3c))
- Update dependency vite to v8.0.11 (#32) ([fd2cc06](https://github.com/wielorzeczownik/vscode-polishc/commit/fd2cc065b78bf4a8887c4ad3cf50153b61824577))
- Update dependency jiti to v2.7.0 (#33) ([2d4594c](https://github.com/wielorzeczownik/vscode-polishc/commit/2d4594c22bb0871afb8d94e7462d4dfff428d698))
- Resolve audit advisories ([6023229](https://github.com/wielorzeczownik/vscode-polishc/commit/6023229f11276f2c944304576c053a6ac48108f7))
- Update dependency typescript-eslint to v8.59.2 (#31) ([2eeb565](https://github.com/wielorzeczownik/vscode-polishc/commit/2eeb5651bd96a48c453effc6773b2b9e7416f326))
- Update dependency eslint to v10.3.0 (#29) ([23142eb](https://github.com/wielorzeczownik/vscode-polishc/commit/23142eb593fe64ee0d36854b0cc89f0c5e368933))
- Update dependency @types/vscode to v1.118.0 (#28) ([94f1288](https://github.com/wielorzeczownik/vscode-polishc/commit/94f12889cd5a61e4baa0945064354b8490f8a0d1))
- Resolve audit advisories ([0f78b7c](https://github.com/wielorzeczownik/vscode-polishc/commit/0f78b7c50951c0012837220f1cd9ceb560a613be))
- Update dependency typescript-eslint to v8.59.1 ([a7e8754](https://github.com/wielorzeczownik/vscode-polishc/commit/a7e8754246238347b5047ccea0251692c25886a4))
- Add typecheck script and pin jiti ([805ba09](https://github.com/wielorzeczownik/vscode-polishc/commit/805ba09ef9773257d4b946688eaec9baefba5c73))
- Extract bump-version script from release workflow ([92ea416](https://github.com/wielorzeczownik/vscode-polishc/commit/92ea416fb077b94f3efe8e3b1ad077791230b905))
- Update dependency vite to v8.0.10 ([7843eb3](https://github.com/wielorzeczownik/vscode-polishc/commit/7843eb389191ba24f21761e81a61a7a54594685c))
- Update dependency typescript-eslint to v8.59.0 (#25) ([41fd90a](https://github.com/wielorzeczownik/vscode-polishc/commit/41fd90a8e4478af6c207a590fd9c4c060c773b3a))
- Update dependency vite to v8.0.9 (#24) ([204a011](https://github.com/wielorzeczownik/vscode-polishc/commit/204a011fa2403d79c249e6ab2f740b72f1d854ea))
- Update dependency @vscode/vsce to v3.9.1 ([1bb4404](https://github.com/wielorzeczownik/vscode-polishc/commit/1bb4404145aedf95fc30cceca65bbcb6817fef5e))
- Update dependency eslint to v10.2.1 (#22) ([1483d18](https://github.com/wielorzeczownik/vscode-polishc/commit/1483d1842b74e68924b781b8828caf1f34edf9c7))
- Update dependency typescript to v6.0.3 ([0582944](https://github.com/wielorzeczownik/vscode-polishc/commit/05829444f96e4916218f55f7a6fdc32c4985fc8d))
- Update dependency @types/vscode to v1.116.0 ([26d51d1](https://github.com/wielorzeczownik/vscode-polishc/commit/26d51d1661aa8bffd02fd9e5809affa69bc6ca56))
- Update dependency @vscode/vsce to v3.9.0 ([6e88d45](https://github.com/wielorzeczownik/vscode-polishc/commit/6e88d4597b0423346edbeeca146c03bf1e5a744e))
- Update dependency eslint-plugin-sonarjs to v4.0.3 (#18) ([2950d21](https://github.com/wielorzeczownik/vscode-polishc/commit/2950d217427ccacf29bd7150949a8c3d727a863e))
- Update dependency prettier to v3.8.3 (#17) ([9a7a623](https://github.com/wielorzeczownik/vscode-polishc/commit/9a7a6234ea7ed9ff5f04c9a6fa860732d4ed254c))
- Update dependency @vscode/vsce to v3.8.0 ([0962d2e](https://github.com/wielorzeczownik/vscode-polishc/commit/0962d2ed2566b262b28d6980cac98eb8c6f3a91b))
- Update dependency typescript-eslint to v8.58.2 (#15) ([dcc0941](https://github.com/wielorzeczownik/vscode-polishc/commit/dcc0941c7bf980e5113b7e8b25852fcfe42199c5))
- Update dependency @types/node to v25.6.0 (#13) ([0e39270](https://github.com/wielorzeczownik/vscode-polishc/commit/0e3927020a7f721a9e595701a7e7436c95470e1a))
- Update dependency prettier to v3.8.2 (#12) ([6ca83fc](https://github.com/wielorzeczownik/vscode-polishc/commit/6ca83fc99ad34601a7fc10d02f97b683fe1432b6))
- Update dependency vite to v8.0.8 ([bea87a4](https://github.com/wielorzeczownik/vscode-polishc/commit/bea87a4929b157d1ae0d438a5ab4437a60ecb724))
- Update dependency @types/vscode to v1.115.0 ([bc91fa5](https://github.com/wielorzeczownik/vscode-polishc/commit/bc91fa5188450ec34ca452d8703d6e60ce28bca8))
- Update dependency typescript-eslint to v8.58.1 ([77cd2d6](https://github.com/wielorzeczownik/vscode-polishc/commit/77cd2d62065d47baef87b35c4a392cd4d41878ec))
- Update dependency vite to v8.0.7 ([9def56a](https://github.com/wielorzeczownik/vscode-polishc/commit/9def56ab542076d757a32ba84407820f21afb437))
- Update dependency vite to v8.0.6 ([1851e77](https://github.com/wielorzeczownik/vscode-polishc/commit/1851e773348d987647548006012e5a4d2ae12bd5))
- Update dependency eslint-plugin-simple-import-sort to v13 ([218e9dd](https://github.com/wielorzeczownik/vscode-polishc/commit/218e9dd01d881843af5a5160447cf65bf1b164b2))

### CI/CD

- Update renovate.json ([a582970](https://github.com/wielorzeczownik/vscode-polishc/commit/a582970c39316267571f3088f8c4f1ea933cebb3))
- Update davidanson/markdownlint-cli2-action action to v23.2.0 ([4e70b66](https://github.com/wielorzeczownik/vscode-polishc/commit/4e70b66cd089d534e32242732189c19ca61313e3))
- Update davidanson/markdownlint-cli2-action action to v23.1.0 (#30) ([44ee8a2](https://github.com/wielorzeczownik/vscode-polishc/commit/44ee8a2cc46b86db49d7b22ec87623a77fb47081))
- Update launch.json ([d98c6b4](https://github.com/wielorzeczownik/vscode-polishc/commit/d98c6b4619c3f2e79a565792af3230131c9c255c))
- Split validate into granular parallel jobs ([b0e8f1f](https://github.com/wielorzeczownik/vscode-polishc/commit/b0e8f1fc8f15944840ef62e11a4831a68d29040f))
- Remove persist-credentials to allow audit workflow to push ([2c7ea17](https://github.com/wielorzeczownik/vscode-polishc/commit/2c7ea17c93f36ea5c5ddde089c012e9b61fc71e9))
- Update audit.yml ([f23a52b](https://github.com/wielorzeczownik/vscode-polishc/commit/f23a52b16ecf602d412b25952e619381f2ed568b))
- Update audit.yml ([f86530a](https://github.com/wielorzeczownik/vscode-polishc/commit/f86530a87c0f5ee2fd88ec3d61147ed7b11ae1ef))
- Update actions/setup-node to v6.4.0 ([fa94bde](https://github.com/wielorzeczownik/vscode-polishc/commit/fa94bdea798ece330b78f8c7c9df119716c0b2d0))
- Harden workflow security, pin action versions, add typecheck and markdown validation ([964fdd4](https://github.com/wielorzeczownik/vscode-polishc/commit/964fdd4adcb8b7a2acdd90666027a47520673739))
- Add minimumReleaseAge and group artifact actions in renovate ([2d9f376](https://github.com/wielorzeczownik/vscode-polishc/commit/2d9f3765cd1f888686dbaf95358d49cbabf03385))
- Add markdownlint config ([db4f7db](https://github.com/wielorzeczownik/vscode-polishc/commit/db4f7dbc80b270fafe3eb162419c09c3c94b052a))
- Update softprops/action-gh-release action to v3 ([3901401](https://github.com/wielorzeczownik/vscode-polishc/commit/3901401e43d6d8048339b919474de22efee55748))

### Dependencies

- Update dependency vscode-languageclient to v10 ([591195b](https://github.com/wielorzeczownik/vscode-polishc/commit/591195ba7d154bd9269907248722ddb6a18e6d28))

## [0.1.2](https://github.com/wielorzeczownik/vscode-polishc/compare/v0.1.1...v0.1.2) - 2026-04-06

### Documentation

- Remove horizontal rules ([1e270d4](https://github.com/wielorzeczownik/vscode-polishc/commit/1e270d40490f3797a2fdf4a93c6b07be832bb4aa))
- Replace hyphens ([45fe6ba](https://github.com/wielorzeczownik/vscode-polishc/commit/45fe6bad403ffabb41b4e1e5c3b1c8f817990261))
- Replace hyphens ([6f53ee9](https://github.com/wielorzeczownik/vscode-polishc/commit/6f53ee981530d346ddec3afb9e5011a62f9b5204))

### Build System

- Update dependency vite to v8.0.5 ([548757c](https://github.com/wielorzeczownik/vscode-polishc/commit/548757cddeb2f8f0831d47bad78cc64ae3e34ed5))
- Resolve audit advisories ([06a0d3c](https://github.com/wielorzeczownik/vscode-polishc/commit/06a0d3cc0420543bab1b5c90c729de42189640e0))

### CI/CD

- Use semantic commit types for deps and github-actions ([16b8685](https://github.com/wielorzeczownik/vscode-polishc/commit/16b86850ca0cb1b5f5ef11448726d9ddbc7a11ca))
- Rename check to validate ([79ba1f0](https://github.com/wielorzeczownik/vscode-polishc/commit/79ba1f042cbaf83731a70e6ad2d7ed009874b35c))
- Remove skip release ([3088641](https://github.com/wielorzeczownik/vscode-polishc/commit/3088641bbda81379a97834f92060fffb35f1f691))
- Rename check to validate and add audit step ([58b1597](https://github.com/wielorzeczownik/vscode-polishc/commit/58b1597ccae8eee0937bbde5645c3628f2ed5185))
- Add automated security audit workflow ([987307c](https://github.com/wielorzeczownik/vscode-polishc/commit/987307c972df37d30b94293fd678962c29acd585))

### Dependencies

- Update dependency eslint to v10.2.0 [skip release] (#4) ([6610a29](https://github.com/wielorzeczownik/vscode-polishc/commit/6610a296ee7bf0ff287b572f80a825e9641e2d22))
- Update dependency @types/node to v25.5.2 [skip release] (#3) ([aef6c54](https://github.com/wielorzeczownik/vscode-polishc/commit/aef6c54a7c60df1531f5cdcf563a8fe03cb52881))
- Update dependency typescript to v6 [skip release] ([14c6f3d](https://github.com/wielorzeczownik/vscode-polishc/commit/14c6f3d650fc2b9112f1151109fbcc8a98fcecde))
- Update dependency typescript-eslint to v8.58.0 [skip release] ([f8795b7](https://github.com/wielorzeczownik/vscode-polishc/commit/f8795b70221ec90d0dbed4788a21cf345b96bf0f))

### Miscellaneous

- Remove skip release filter ([09827b6](https://github.com/wielorzeczownik/vscode-polishc/commit/09827b60f6f8c8d21552bed2bfecb76570accbbc))

## [0.1.1](https://github.com/wielorzeczownik/vscode-polishc/compare/v0.1.0...v0.1.1) - 2026-03-30

### Bug Fixes

- Noelo takes no arguments ([a89493a](https://github.com/wielorzeczownik/vscode-polishc/commit/a89493a8c46da32337b4bd70e1208734d3caa3ae))

### Documentation

- Simplify build instructions to use npm run build ([0880005](https://github.com/wielorzeczownik/vscode-polishc/commit/08800052cbe59f996122fc7172d010d81a30d9f9))
- Correct Polish C description from dialect to variant ([58f436a](https://github.com/wielorzeczownik/vscode-polishc/commit/58f436aaff6818efd454ce55ed57c2f9333c27f6))

### Miscellaneous

- Change license from MIT to WTFPL ([85119ba](https://github.com/wielorzeczownik/vscode-polishc/commit/85119baa46f790a2d78b282e784b1bda5ea0e6dd))

### Other

- Update README.md ([797dde0](https://github.com/wielorzeczownik/vscode-polishc/commit/797dde068dadd8643625c4ff030054f4cd9d4014))

## [0.1.0] - 2026-03-29

### Features

- Initial commit ([f74cd0e](https://github.com/wielorzeczownik/vscode-polishc/commit/f74cd0eb5fc0c912bf8948174f27051e1d069746))

