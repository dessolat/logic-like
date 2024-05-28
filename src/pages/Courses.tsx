import cl from './Courses.module.scss';

import CoursesGrid from 'components/Courses/CoursesGrid/CoursesGrid';
import ThemesList from 'components/Courses/ThemesList/ThemesList';
import ErrorMessage from 'components/UI/ErrorMessage/ErrorMessage';

import Loader from 'components/UI/Loader/Loader';

import useCourses from 'hooks/useCourses';
import useFilteredCourses from 'hooks/useFilteredCourses';
import useThemes from 'hooks/useThemes';

const defaultTheme = 'Все темы';

const Courses = () => {
  const { courses, isLoading, error } = useCourses();

  const { themes, activeTheme, handleThemeClick } = useThemes(courses, defaultTheme);

  const filteredCourses = useFilteredCourses(courses, activeTheme, defaultTheme);

	console.log(123);
	

  // Error message render
  if (error)
    return (
      <section className='page'>
        <ErrorMessage message={error} />
      </section>
    );

  // Loader render
  if (isLoading) return <Loader />;

  // Main render
  return (
    <section className='container page'>
      <div className={cl.wrapper}>
        <ThemesList themes={themes} activeTheme={activeTheme} handleThemeClick={handleThemeClick} />
        <CoursesGrid courses={filteredCourses} />
      </div>
    </section>
  );
};
export default Courses;
