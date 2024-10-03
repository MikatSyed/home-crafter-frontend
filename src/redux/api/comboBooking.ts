
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const  URL = "/combo-booking";

export const comboBookingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({


    comboBooking: build.query({
      query: (id) => ({
        url : `${URL}/${id}`,
        method: "GET"
       
      }),
      providesTags:[tagTypes.comboBooking]
    }),

   
    addComboBooking: build.mutation({
        query: (data) => ({
          url : URL,
          method: "POST",
          data
        }),
        invalidatesTags:[tagTypes.comboBooking]
      }),

  

  }),
});

export const { useAddComboBookingMutation,useComboBookingQuery } = comboBookingApi;
