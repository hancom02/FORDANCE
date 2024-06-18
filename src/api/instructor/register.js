import apiInstance from '../apiInstance';

export default async function registerInstructor(instructor) {
  const response = await apiInstance.post(`/instructor`, instructor);

  return response.data;
}
