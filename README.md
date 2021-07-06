# react-typography

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-typography.svg)](https://www.npmjs.com/package/react-typography) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Status: development

## Setup and run

To setup and run a local copy:

- Clone this repo with `git clone https://github.com/leoarmelin/react-typography.git`
- Run yarn or npm install in the root folder
- Run yarn or npm install in the example folder
- In seperate terminal windows, run yarn start in the root and example folders.

You should now be up and running with live browser reloading of the example website while you work on React Typography components in the /src folder.

## Usage

```tsx
import React from 'react';

import { Typography } from 'react-typography';

const MyComponent = () => {
  return <Typography type='Headline'>No more worries about texts</Typography>;
};
```

## Repository structure

This repository contains 2 folders:

- /src contains all the Tabler React components
- /example is our create-react-app based demo website

## Commit Guidelines

| Commit Message                                                                                                         | Version Change |
| ---------------------------------------------------------------------------------------------------------------------- | -------------- |
| feat(TitleOne): A new feature                                                                                          | **Minor**      |
| fix(Headline): A bug fix                                                                                               | **Patch**      |
| docs(Typography): Documentation only changes                                                                           | None           |
| style(Footer): Changes that do not affect the meaning of the code (white-space, for matting, missing semi-colons, etc) | None           |
| refactor(LargeTitle): A code change that neither fixes a bug nor adds a feature                                        | None           |
| perf(Caption): A code change that improves performance                                                                 | None           |
| test(TitleTwo): Adding missing tests or correcting existing tests                                                      | None           |
| chore(package): Other changes that don't modify src or test files                                                      | None           |
| revert(#19): Reverts a previous commit                                                                                 | None           |

## License

MIT © [leoarmelin](https://github.com/leoarmelin)
