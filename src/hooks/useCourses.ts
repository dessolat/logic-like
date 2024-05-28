import { useEffect, useState } from 'react';

import axios from 'axios';

import courseService from 'services/course.service';

import { type TCourse } from 'types';

const useCourses = () => {
  const [courses, setCourses] = useState<TCourse[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        const courses = await courseService.fetchCourses();

        setCourses(courses);
        setError(null);
      } catch (error) {
        if (axios.isAxiosError(error) || error instanceof Error) setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return { courses, isLoading, error };
};
export default useCourses;
