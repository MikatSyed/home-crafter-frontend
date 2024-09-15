
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const  URL = "/provider";

export const providerApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

  

    // users: build.query({
    //   query: (arg: Record<string, any>) => {
    //     return {
    //       url: USER_URL,
    //       method: "GET",
    //       params: arg,
    //     };
    //   },
    //   transformResponse: (response: any[], meta: IMeta) => {
    //     return {
    //       users: response,
    //       meta,
    //     };
    //   },
    //   providesTags: [tagTypes.user],
    // }),

    // loggedUser: build.query({
    //   query: () => {
    //     return {
    //       url: "/profile/provider",
    //       method: "GET"
    //     };
    //   },
    //   providesTags: [tagTypes.user],
    // }),

    providerById: build.query({
      query: (id) => ({
        url : `${URL}/${id}`,
        method: "GET"
       
      }),
      providesTags:[tagTypes.provider]
    }),


    updateProvider: build.mutation({
      query: (data) => ({
        url : `${URL}/${data.id}`,
        method: "PATCH",
        data:data.body
      }),
      invalidatesTags:[tagTypes.provider,tagTypes.user]
    }),

    
    // deleteUser: build.mutation({
    //   query: (id) => ({
    //     url : `${URL}/${id}`,
    //     method: "DELETE"
       
    //   }),
    //   invalidatesTags:[tagTypes.user]
    // }),

  }),
});

export const {useProviderByIdQuery,useUpdateProviderMutation} = providerApi;
