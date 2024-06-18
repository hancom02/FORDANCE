import apiInstance from '../apiInstance';

export default async function getSavedLesson() {
  const response = await apiInstance.get(`/lesson/saved`);

  return response.data;
}
