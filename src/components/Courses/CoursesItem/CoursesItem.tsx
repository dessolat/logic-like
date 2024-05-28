import cl from './CoursesItem.module.scss';

import { type TCourse } from 'types';

type Props = {
  course: TCourse;
};

const CoursesItem = ({ course }: Props) => {
  return (
    <div className={cl.course}>
      <div
        className={cl.imageWrapper}
        style={{ backgroundColor: course.bgColor, backgroundImage: `url(${course.image})` }}>
        {/* <img src={course.image} alt={course.name} /> */}
      </div>
      <div className={cl.courseName}>{course.name}</div>
    </div>
  );
};
export default CoursesItem;
