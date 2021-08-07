---
layout: default
title: Styling
nav_order: 5
---

# Styling

Currently, react-easy-typography is following two guidelines: **Google** and **Apple**.

In the future, we want to give our users the opportunity to create their own typography systems easisy. Right now, if you want to style Google's or Apple's guidelines, you have two ways: using styled-components or className. Let's see!

## Using Styled-components

We provided our component style in `TypographyStyle` component. To use it, you need to import:

```
import { TypographyStyle } from 'react-easy-typography';
```

After, following the styled-components [docs](https://styled-components.com/docs/basics#styling-any-component) for styling any component, we will write the code below:

```
import styled from 'styled-components';
import { TypographyStyle } from 'react-easy-typography';

const MyTypographyComponent = styled(TypographyStyle)`
  font-size: 2rem;
  font-weight: bolder;
`;
```

Finally, use the component in your code, as the example below:

```
export const Greetings = () => {
  return <MyTypographyComponent>Hello!</MyTypographyComponent>
}
```

## Using className

Contrary to the styled-somponents one, let's start creating the component itself, but using a `className` prop.

```
export const Greetings = () => {
  return (
    <Container>
      <Typography className="my-component">Hello!</Typography>
    </Container>
  )
}
```

In this way, it's possible to apply css styles using the `Container` component:

```
import styled from 'styled-components';

export const Container = styled.div`
  .my-component {
    color: #8be9fd;
    font-size: 1rem;
  }
`;
```
