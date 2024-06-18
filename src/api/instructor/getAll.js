import apiInstance from '../apiInstance';

export default async function getAllInstructor({queryKey}) {
  const [_, q] = queryKey;
  const response = await apiInstance.get(`/instructor?q=${q}`);

  return response.data;
}
