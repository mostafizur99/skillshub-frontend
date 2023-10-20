import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const USER_URL = "/users";
export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get  All Users
    getUsers: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${USER_URL}`,
          method: "GET",
          params: arg,
        };
      },
      providesTags: [tagTypes.user],
    }),

    // get a User Profile
    getProfile: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${USER_URL}/my-profile`,
          method: "GET",
          params: arg,
        };
      },
      providesTags: [tagTypes.user],
    }),
    // update users
    updateUsers: build.mutation({
      query: (data) => ({
        url: `${USER_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    // update users by admin
    updateUsersByAdmin: build.mutation({
      query: (data) => ({
        url: `${USER_URL}//super-admin/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    // get single user
    getSingleUser: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${USER_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    // delete user
    deleteUser: build.mutation({
      query: (id) => ({
        url: `${USER_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetProfileQuery,
  useUpdateUsersMutation,
  useUpdateUsersByAdminMutation,
  useGetSingleUserQuery,
  useDeleteUserMutation,
} = userApi;
