import apiInstance from '../apiInstance';

export default async function getDetailLesson({queryKey}) {
  const [_, id] = queryKey;
  const response = await apiInstance.get(`/lesson/${id}`);

  return response.data;
}
