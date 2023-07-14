
const endpoints = {
  // Auth
  login: "auth/login",
  preSignup: "auth/preSignup",
  signup: "auth/signup",
  logout: "auth/logout",
  confirmEmail: (token: string) => `auth/confirmEmail/${token}`,
  resetPassword: "/resetPassword/setNewPassword",
  restPasswordToken: "/resetPassword/createToken",

  // User
  completeSignup: (token: string) => `auth/completeSignup/${token}`,

  // Jobs
  getJobs: "jobs/getAllJobs",
  postJob: "jobs/postJob",
  getJobByUserId: (userId: string) => `jobs/getUser/${userId}`,
  getJobById: (jobId: string) => `jobs/${jobId}`,
}