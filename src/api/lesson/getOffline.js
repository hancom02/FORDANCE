import apiInstance from '../apiInstance';

export default async function getOfflineLesson() {
  const response = await apiInstance.get(`/lesson/offline`);

  return response.data;
}
