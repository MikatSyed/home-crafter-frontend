
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const  URL = "/provider";

export const providerApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

  
    providers: build.query({
      query: () => ({
        url : `${URL}`,
        method: "GET"
       
      }),
      providesTags:[tagTypes.provider]
    }),

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
      invalidatesTags:[tagTypes.provider]
    }),
    updateProviderStatus: build.mutation({
      query: (data) => ({
        url : `${URL}/${data.id}/status`,
        method: "PATCH",
        data:data.body
      }),
      invalidatesTags:[tagTypes.provider]
    }),

   

  }),
});

export const {useProvidersQuery,useProviderByIdQuery,useUpdateProviderMutation,useUpdateProviderStatusMutation} = providerApi;
