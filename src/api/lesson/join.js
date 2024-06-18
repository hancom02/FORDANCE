import apiInstance from '../apiInstance';

export async function updateJoinLesson({id, isJoin, isJoinOff}) {
  const response = await apiInstance.post(
    `/lesson/${id}/${isJoin ? 'join' : 'leave'}`,
    {isJoinOff},
  );

  return response.data;
}
