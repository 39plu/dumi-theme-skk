import React from 'react';
import { NpmIcon } from './Npm/index';
import { PnpmIcon } from './Pnpm/index';
import { useStyles } from './style';
import { TsIcon } from './Ts/index';
import { TsxIcon } from './Tsx/index';
import { VueIcon } from './Vue/index';
import { YarnIcon } from './Yarn/index';

const iconMap: any = {
  pnpm: PnpmIcon,
  yarn: YarnIcon,
  npm: NpmIcon,
  ts: TsIcon,
  tsx: TsxIcon,
  vue: VueIcon,
};

interface LanguageIconProps {
  name: string;
}

export const LanguageIcon: React.FC<LanguageIconProps> = (props) => {
  const { styles } = useStyles();
  const suffixRegex = /\.([a-zA-Z0-9]+)$/;
  let suffix: string = '';
  if (suffixRegex.test(props.name)) {
    const result = suffixRegex.exec(props.name);
    if (result && result.length > 1) {
      suffix = result[1].toLowerCase();
    }
  }
  if (iconMap[props.name] || iconMap[suffix]) {
    const IconComponent = iconMap[props.name] || iconMap[suffix];
    return (
      <div className={styles.languageIcon}>
        <IconComponent className={styles.icon} />
        {props.name}
      </div>
    );
  }
  return <div className={styles.languageIcon}>{props.name}</div>;
};
