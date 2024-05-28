import { useMemo, useState } from 'react';

import { type THandleThemeClick, type TCourse } from 'types';

const useThemes = (courses: TCourse[], defaultTheme: string) => {
  const [activeTheme, setActiveTheme] = useState<string>(defaultTheme);

  const handleThemeClick: THandleThemeClick = theme => () => {
    setActiveTheme(theme);
  };

  const themes = useMemo(
    () => [
      defaultTheme,
      ...new Set(
        courses.reduce((acc, course) => {
          return [...acc, ...course.tags];
        }, [] as string[])
      )
    ],
    [courses]
  );

  return { themes, activeTheme, handleThemeClick };
};
export default useThemes;
