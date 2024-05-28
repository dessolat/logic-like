import clsx from 'clsx';
import cl from './ThemesItem.module.scss'

import { type THandleThemeClick } from 'types';

type Props = {
  value: string;
  isActive: boolean;
	handleThemeClick: THandleThemeClick
};

const ThemesItem = ({ value, isActive, handleThemeClick }: Props) => {
  const classes = clsx(cl.theme, {
    [cl.active]: isActive
  });

  return <li className={classes} onClick={handleThemeClick(value)}>{value}</li>;
};

export default ThemesItem;