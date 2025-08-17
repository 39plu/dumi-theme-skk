import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css }) => {
  return {
    languageIcon: css`
      display: flex;
      align-items: center;
      justify-content: center;
    `,
    icon: css`
      margin-inline-end: 8px;
    `,
  };
});
