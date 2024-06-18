import apiInstance from '../apiInstance';

export default async function createProgram(program) {
  const response = await apiInstance.post(`/program`, program);

  return response.data;
}
