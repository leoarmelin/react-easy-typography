import { css } from 'styled-components';

interface IGuideline {
  guideline: 'Apple' | 'Google';
}

const LargeTitle = css<IGuideline>`
  ${props =>
    props.guideline === 'Google'
      ? css`
          font-size: 3.75rem;
          font-weight: lighter;
          letter-spacing: -0.0313em;
        `
      : css`
          font-size: 3rem;
          font-weight: bold;
          letter-spacing: -0.003em;
          line-height: 1.08349rem;
        `}
`;

const TitleOne = css<IGuideline>`
  ${props =>
    props.guideline === 'Google'
      ? css`
          font-size: 3rem;
        `
      : css`
          font-size: 2.5rem;
          line-height: 1.1rem;
          font-weight: bold;
        `}
`;

const TitleTwo = css<IGuideline>`
  ${props =>
    props.guideline === 'Google'
      ? css`
          font-size: 2.125rem;
          font-weight: normal;
          letter-spacing: 0.0156em;
        `
      : css`
          font-size: 2rem;
          font-weight: bold;
          letter-spacing: 0.004em;
          line-height: 1.125rem;
        `}
`;

const TitleThree = css<IGuideline>`
  ${props =>
    props.guideline === 'Google'
      ? css`
          font-size: 1.5rem;
        `
      : css`
          font-size: 1.3125;
          font-weight: bold;
        `}
`;

const Headline = css<IGuideline>`
  ${props =>
    props.guideline === 'Google'
      ? css`
          font-size: 1rem;
          font-weight: bold;
          letter-spacing: 0.0313em;
        `
      : css`
          font-size: 1.0625rem;
          font-weight: bold;
          line-height: 1.47059rem;
        `}
`;

const Body = css<IGuideline>`
  ${props =>
    props.guideline === 'Google'
      ? css`
          font-size: 1rem;
          letter-spacing: 0.0313em;
        `
      : css`
          font-size: 1.0625rem;
          letter-spacing: -0.022em;
          line-height: 1.47059rem;
        `}
`;

const Caption = css<IGuideline>`
  ${props =>
    props.guideline === 'Google'
      ? css`
          font-size: 0.75rem;
          letter-spacing: 0.4px;
        `
      : css`
          font-size: 0.875rem;
          letter-spacing: -0.022em;
          line-height: 1.4rem;
        `}
`;

const Footer = css<IGuideline>`
  ${props =>
    props.guideline === 'Google'
      ? css`
          font-size: 0.625rem;
          letter-spacing: 1.5px;
        `
      : css`
          font-size: 0.6875;
          line-height: 1rem;
          letter-spacing: 0.015em;
        `}
`;

export const handleStyle = (styleName: string) => {
  if (styleName === 'LargeTitle') return LargeTitle;
  if (styleName === 'TitleOne') return TitleOne;
  if (styleName === 'TitleTwo') return TitleTwo;
  if (styleName === 'TitleThree') return TitleThree;
  if (styleName === 'Headline') return Headline;
  if (styleName === 'Caption') return Caption;
  if (styleName === 'Footer') return Footer;
  return Body;
};
