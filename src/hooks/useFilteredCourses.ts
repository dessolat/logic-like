import { useMemo } from 'react';

import { type TCourse } from 'types';

const useFilteredCourses = (courses: TCourse[], activeTheme: string, defaultTheme: string) => {
  const filteredCourses = useMemo(
    () =>
      activeTheme !== defaultTheme ? courses.filter(course => course.tags.includes(activeTheme)) : courses,
    [courses, activeTheme]
  );

  return filteredCourses;
};

export default useFilteredCourses;
