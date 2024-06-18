import apiInstance from '../apiInstance';

export default async function createComment(comment) {
  const response = await apiInstance.post(`/comment`, comment);

  return response.data;
}
