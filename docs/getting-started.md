---
layout: default
title: Getting started
nav_order: 4
---

# Getting started

Now it's time to create your first typography component! Firstly, create any react component, in order to contain our component.

```js
export const App = () => {
  return (
    <div>
      <p>Hello, World!</p>
    </div>
  );
};
```

The next step is to import our library and replace the `<p>` tag with the `<Typography>` tag.

```js
import { Typography } from 'react-easy-typography';

export const App = () => {
  return (
    <div>
      <Typography>Hello, World!</Typography>
    </div>
  );
};
```

Softer than chewing water, right?
