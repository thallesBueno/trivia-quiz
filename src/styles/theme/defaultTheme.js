import { css } from 'styled-components';

const colors = {
  mainColor: '#EF7D00',
  mainColorDarker: '#DB6900',
  mainColorLighter: '#FFA142',

  red: '#CF3200',
  darkRed: '#bf3304',

  green: '#2BD971',
  darkGreen: '#00ad3d',

  textColorPrimary: '#3C3C3B',

  backgroundColorLight: '#E8EDF2',
  white: '#fff',
};

const titleHeadline = css`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;

const titleBold = css`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
`;

const titleRegular = css`
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
`;

const subTitle = css`
  font-weight: normal;
  font-size: 12px;
  line-height: 19px;
  text-transform: uppercase;
`;

const subTitleMedium = css`
  font-weight: 500;
  font-size: 12px;
  line-height: 19px;
  text-transform: uppercase;
`;

const paragraphRegular = css`
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
`;

const paragraphMedium = css`
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
`;

const descriptionRegular = css`
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
`;

const descriptionLight = css`
  font-weight: 300;
  font-size: 12px;
  line-height: 19px;
`;

const hintRegular = css`
  font-weight: normal;
  font-size: 10px;
  line-height: 19px;
`;

const hintLight = css`
  font-weight: 300;
  font-size: 10px;
  line-height: 19px;
`;

const ctaLabel = css`
  font-weight: 500;
  font-size: 12px;
  line-height: 19px;
  text-transform: uppercase;
`;

const defaultTheme = {
  colors,
  typograph: {
    titleHeadline,
    titleBold,
    titleRegular,
    subTitle,
    subTitleMedium,
    paragraphRegular,
    paragraphMedium,
    descriptionRegular,
    descriptionLight,
    hintRegular,
    hintLight,
    ctaLabel,
  },
};

export default defaultTheme;
