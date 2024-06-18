import apiInstance from '../apiInstance';

export default async function getDetailProgram({queryKey}) {
  const [_, id] = queryKey;
  const response = await apiInstance.get(`/program/${id}`);

  return response.data;
}
