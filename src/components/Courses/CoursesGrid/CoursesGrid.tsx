import CoursesItem from '../CoursesItem/CoursesItem';
import cl from './CoursesGrid.module.scss';

import { TCourse } from 'types';

type Props = {
  courses: TCourse[];
};

const CoursesGrid = ({ courses }: Props) => {
  return (
    <div className={cl.grid}>
      {courses.map(course => (
        <CoursesItem key={course.id} course={course} />
      ))}
    </div>
  );
};
export default CoursesGrid;
