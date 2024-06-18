import apiInstance from '../apiInstance';

export default async function getDetailInstructor({queryKey}) {
  const [_, id] = queryKey;
  const response = await apiInstance.get(`/instructor/${id}`);

  return response.data;
}
