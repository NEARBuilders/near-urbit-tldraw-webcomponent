# near-urbit-tldraw

—> [near-bos-webcomponent](https://github.com/nearbuilders/near-bos-webcomponent) with [tldraw](https://github.com/tldraw/tldraw) installed and a custom [Urbit NearSocial/VM](https://github.com/urbit/NearSocialVM), in order to provide a sandbox for builders wanting to create decentralized Urbit apps.

## Getting started

To run locally, install packages:

```bash
yarn
```

Then, run the command:

```bash
yarn run dev
```

This will start a local [bos-workspace](https://github.com/nearbuilders/bos-workspace) to build and serve your local widgets via RPC proxy, and watch for changes to the web component itself.

## Running Playwright tests

To be able to run the [playwright](https://playwright.dev) tests, you first need to install the dependencies. You can see how this is done in [.devcontainer/post-create.sh](./.devcontainer/post-create.sh) which is automatically executed when opening this repository in a github codespace.

When the dependencies are set up, you can run the test suite in your terminal:

```bash
yarn test
```

To run tests visually in the playwright UI, you can use the following command:

```bash
yarn test:ui
```

This will open the playwright UI in a browser, where you can run single tests, and also inspect visually.

If you want to use the playwright UI from a github codespace, you can use this command:

```bash
yarn test:ui:codespaces
```

In general it is a good practice, and very helpful for reviewers and users of this project, that all use cases are covered in Playwright tests. Also, when contributing, try to make your tests as simple and clear as possible, so that they serve as examples on how to use the functionality.

## Publishing to NEARFS

For testing how the library would work when used from CDN, you may publish it to NEARFS.

 ```bash
yarn nearfs:publish-library:create:car
```

Take note of the IPFS address returned by this command, which will be used for finding the published library later. An example of what this looks like is `bafybeicu5ozyhhsd4bpz4keiur6cwexnrzwxla5kaxwhrcu52fkno5q5fa`

```bash
NODE_ENV=mainnet yarn nearfs:publish-library:upload:car youraccount.near
```

After uploading, it normally takes some minutes before the files are visible on NEARFS. When going to the expected URL based on the IPFS address we saw above, we will first see the message `Not found`.

This is an example of the NEARFS url, and you should replace with the IPFS address you received above:

https://ipfs.web4.near.page/ipfs/bafybeicu5ozyhhsd4bpz4keiur6cwexnrzwxla5kaxwhrcu52fkno5q5fa/
