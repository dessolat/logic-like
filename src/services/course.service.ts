import axios from 'axios';

import { type TCourse } from 'types';

type TResponse = TCourse[]

class CourseService {
  private URL = 'https://logiclike.com/docs/courses.json';

  async fetchCourses(): Promise<TResponse> {
    const response = await axios.get(this.URL);

    if (response.status !== 200) {
      throw new Error(response.statusText);
    }

    return response.data;
  }
}

export default new CourseService();