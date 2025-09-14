export const ApiEndpoints = {
  getAllUsers: '/api/users/all',
  getPaginatedUsers: (page: number, limit: number) =>
    `/api/users?page=${page}&limit=${limit}`,
  getUserDetails: (userId: number) => `/api/getuserdetails/${userId}`,
  editUserDetails: (userId: number) => `/api/edituserdetails/${userId}`,
  userExists:(username:string)=>`api/check-username?username=${username}`
};
