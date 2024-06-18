import apiInstance from '../apiInstance';

export default async function updateInstructorApi({id, ...instructor}) {
  const response = await apiInstance.patch(`/instructor/${id}`, instructor);

  return response.data;
}
