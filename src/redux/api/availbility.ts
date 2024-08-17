
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const  URL = "/availbility";

export const availbilityApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

    availbilities: build.query({
      query: () => {
        return {
          url: URL,
          method: "GET",      
        };
      },
      providesTags: [tagTypes.availbility],
    }),



    addAvailbility: build.mutation({
        query: (data) => ({
          url : `${URL}`,
          method: "POST",
          data
        }),
        invalidatesTags:[tagTypes.availbility]
      }),


    
    deleteAvailbility: build.mutation({
      query: (data) => ({
          url: `${URL}`,
          method: 'DELETE',
          data
        }),
      invalidatesTags:[tagTypes.availbility]
    }),

  }),
});

export const { useAvailbilitiesQuery,useAddAvailbilityMutation,useDeleteAvailbilityMutation } = availbilityApi;
