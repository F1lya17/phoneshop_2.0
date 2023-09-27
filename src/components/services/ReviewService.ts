import { Review } from "@/api/interfacesAoi"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { url } from "inspector"

export const reviewAPI = createApi({
    reducerPath: "reviewAPI",
    baseQuery: fetchBaseQuery({ baseUrl: "https://6502dd6aa0f2c1f3faeb0054.mockapi.io/api/" }),
    endpoints: (build) => ({
        fetchReviews: build.query<Review[], string>({
            query: (id) => ({
                url: `/reviews/${id}`
            })
        })
    })
})