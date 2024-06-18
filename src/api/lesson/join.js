import apiInstance from '../apiInstance';

export async function updateJoinLesson({id, isJoin}) {
  const response = await apiInstance.post(
    `/lesson/${id}/${isJoin ? 'join' : 'leave'}`,
  );

  return response.data;
}
