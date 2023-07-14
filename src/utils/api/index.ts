import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://archi-hub-backend.vercel.app",
  }),
  endpoints: () => ({}),
  tagTypes: [
    "User",
    "Jobs",
    "Events",
    "Messages",
  ],
});
