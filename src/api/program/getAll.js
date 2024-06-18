import apiInstance from '../apiInstance';

export default async function getAllPrograms(keyword) {
  const response = await apiInstance.get(`/program?q=${keyword || ''}`);

  return response.data;
}

export async function getAllProgramsApi({queryKey}) {
  const [_, keyword] = queryKey;
  const response = await apiInstance.get(`/program?q=${keyword || ''}`);

  return response.data;
}
