import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const SERVICE_URL = "/services";
export const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all services
    getServices: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${SERVICE_URL}`,
          method: "GET",
          params: arg,
        };
      },
      //   transformResponse: (response: IService[], meta: IMeta) => {
      //     return {
      //       services: response,
      //       meta,
      //     };
      //   },
      providesTags: [tagTypes.services],
    }),
    // get single service
    getSingleService: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${SERVICE_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.services],
    }),
    // create a new service
    addServices: build.mutation({
      query: (data) => ({
        url: `${SERVICE_URL}`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.services],
    }),
    // update service
    updateService: build.mutation({
      query: (data) => ({
        url: `${SERVICE_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.services],
    }),
    // delete service
    deleteService: build.mutation({
      query: (id) => ({
        url: `${SERVICE_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.services],
    }),
    // review service
    reviewService: build.mutation({
      query: (data) => ({
        url: `${SERVICE_URL}/review/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.services],
    }),
  }),
});

export const {
  useGetServicesQuery,
  useGetSingleServiceQuery,
  useAddServicesMutation,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
  useReviewServiceMutation,
} = serviceApi;
