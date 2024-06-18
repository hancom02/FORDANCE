import apiInstance from '../apiInstance';

export async function saveLesson({id}) {
  const response = await apiInstance.post(`/lesson/${id}/save`);

  return response.data;
}

export async function unsaveLesson({id}) {
  const response = await apiInstance.post(`/lesson/${id}/unsave`);

  return response.data;
}
