import apiInstance from '../apiInstance';

export default async function signInStudentApi({googleId, name, photoUrl}) {
  const response = await apiInstance.post(`/auth/student/login`, {
    googleId,
    name,
    photoUrl,
  });

  return response.data;
}

export async function signInInstructorApi({username, password}) {
  const response = await apiInstance.post(`/auth/instructor/login`, {
    username,
    password,
  });
  console.log({response});

  return response?.data;
}
