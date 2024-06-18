import apiInstance from '../apiInstance';

export default async function updateLesson({id, ...lesson}) {
  const response = await apiInstance.patch(`/lesson/${id}`, lesson);

  return response.data;
}
