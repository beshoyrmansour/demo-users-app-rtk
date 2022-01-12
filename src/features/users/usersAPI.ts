import axios, { AxiosResponse } from "axios";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { DUMMy_API } from "../../app/constants/endpoints";
import { AxiosGetPostsResponse, GetPostsResponse } from "../../app/models/users/post";
import { GetUsersResponse, User } from "../../app/models/users/user";

// A mock function to mimic making an async request for data
// export function fetchUsers(amount = 1) {
//   return new Promise<{ data: number }>((resolve) =>
//     setTimeout(() => resolve({ data: amount }), 500)
//   );
// }


export const fetchPosts: ({ page, limit }: { page: number, limit: number }) => Promise<AxiosGetPostsResponse> = ({ page = 0, limit = 10 }) => {
  return axios.get<GetPostsResponse>(`${DUMMy_API}/post`, {
    params: {
      page,
      limit
    },
    headers: {
      "app-id": process.env.REACT_APP_DUMMY_API_APP_ID || ""
    }
  })
}



export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: DUMMy_API,
    prepareHeaders: (headers, { getState }) => {
      // const token = (getState() as RootState).auth.token
      // // If we have a token set in state, let's assume that we should be passing it.
      // if (token) {
      //   headers.set('authorization', `Bearer ${token}`)
      // }
      headers.set("app-id", process.env.REACT_APP_DUMMY_API_APP_ID || "")

      return headers
    },
  }),
  endpoints: (builder) => ({
    usersList: builder.query<Promise<GetUsersResponse>, void>({
      query: () => '/user'
    }),
    userDetils: builder.query<User, string>({
      query: (id) => `/user/${id}`
    })
  })
})

export const { useUsersListQuery, useUserDetilsQuery } = usersApi;