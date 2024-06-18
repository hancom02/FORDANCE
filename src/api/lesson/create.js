import apiInstance from '../apiInstance';

export default async function createLesson(lesson) {
  const response = await apiInstance.post(`/lesson`, lesson);

  return response.data;
}
