import apiInstance from '../apiInstance';

export default async function getTodayLesson() {
  const response = await apiInstance.get(`/lesson/today`);

  return response.data;
}
