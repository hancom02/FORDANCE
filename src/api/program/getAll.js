import apiInstance from '../apiInstance';

export default async function getAllPrograms(keyword) {
  const response = await apiInstance.get(`/program?q=${keyword || ''}`);

  return response.data;
}
