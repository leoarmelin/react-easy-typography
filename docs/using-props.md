---
layout: default
title: Styling
nav_order: 5
---

# Using props

## Guideline prop

Currently, react-easy-typography is following two guidelines: **Google** and **Apple**.

It's really easy to use this prop, you just need to choose between Google's or Apple's guideline! The code below shows how to use it:

```
import { Typography } from 'react-easy-typography';

export const GoodJoke = () => {
  return (
    <Container>
      <Typography guideline="Google">Haha, that's funny!</Typography>
    </Container>
  )
}
```

| Name      | Description         |
| --------- | ------------------- |
| guideline | 'Google' \| 'Apple' |

If `guideline` isn't used, the default value will be `'Google'`.

## Type prop

When using the `type` property, it's important to know that its semantic value will be changed as the type changes.

Each guideline has its own styling, but the `type` names are the same. We can see some examples below:

```
import { Typography } from 'react-easy-typography';

export const TocToc = () => {
  return (
    <Container>
      <Typography type="TitleOne">Toc toc!</Typography>
      <Typography type="TitleTwo">Who's there?</Typography>
      <Typography type="Body">The typo</Typography>
      <Typography type="Caption">Which typo?</Typography>
      <Typography type="Headline">The easiest library of typography!</Typography>
    </Container>
  )
}
```

| Name | Description                                                                                               |
| ---- | --------------------------------------------------------------------------------------------------------- |
| type | 'LargeTitle' \| 'TitleOne' \| 'TitleTwo' \| 'TitleThree' \| 'Headline' \| 'Body' \| 'Caption' \| 'Footer' |

| Name       | Semantic Tag |
| ---------- | ------------ |
| LargeTitle | 'h1'         |
| TitleOne   | 'h1'         |
| TitleTwo   | 'h2'         |
| TitleThree | 'h3'         |
| Headline   | 'b'          |
| Body       | 'p'          |
| Caption    | 'p'          |
| Footer     | 'p'          |

If `type` isn't used, the default value will be `'Body'`.
