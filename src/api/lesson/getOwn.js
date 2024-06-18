import apiInstance from '../apiInstance';

export default async function getOwnLesson() {
  const response = await apiInstance.get(`/lesson/own`);

  return response.data;
}
