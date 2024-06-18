import apiInstance from '../apiInstance';

export default async function getAllLesson({queryKey}) {
  const [_, q] = queryKey;
  const response = await apiInstance.get(`/lesson?q=${q}`);

  return response.data;
}
