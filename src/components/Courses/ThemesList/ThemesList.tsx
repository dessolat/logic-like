import cl from './ThemesList.module.scss';

import ThemesItem from '../ThemesItem/ThemesItem';

import { type THandleThemeClick } from 'types';

type Props = {
  themes: string[];
  activeTheme: string;
  handleThemeClick: THandleThemeClick;
};

const ThemesList = ({ themes, activeTheme, handleThemeClick }: Props) => {
  return (
    <ul className={cl.list}>
      {themes.map(theme => (
        <ThemesItem
          key={theme}
          value={theme}
          isActive={theme === activeTheme}
          handleThemeClick={handleThemeClick}
        />
      ))}
    </ul>
  );
};
export default ThemesList;
