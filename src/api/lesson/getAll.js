import apiInstance from '../apiInstance';

export default async function getAllLesson({queryKey}) {
  const [_, q, category] = queryKey;
  const response = await apiInstance.get(
    `/lesson?q=${q}${category ? '&category=' + category : ''}`,
  );

  return response.data;
}
