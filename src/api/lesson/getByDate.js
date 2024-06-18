import apiInstance from '../apiInstance';

export default async function getLessonByDate({queryKey}) {
  const [_, date] = queryKey;
  const response = await apiInstance.get(`/lesson/date?date=${date}`);

  return response.data;
}
