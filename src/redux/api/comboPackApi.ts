import {  IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const  URL = "/combo-pack";

export const comboPackApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

    combos: build.query({
      query: () => {
        return {
          url: URL,
          method: "GET",      
        };
      },
    
      providesTags: [tagTypes.combo],
    }),

    addCombo: build.mutation({
        query: (data) => ({
          url : `${URL}`,
          method: "POST",
          data
        }),
        invalidatesTags:[tagTypes.combo]
      }),
 

  }),
});

export const {useCombosQuery,useAddComboMutation } = comboPackApi;
