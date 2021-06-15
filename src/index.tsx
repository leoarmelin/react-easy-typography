import * as React from 'react'

export interface TypographyProps {
  text: string
}

export const Typography = ({ text }: TypographyProps): JSX.Element => {
  return <h1>{text}</h1>
}
