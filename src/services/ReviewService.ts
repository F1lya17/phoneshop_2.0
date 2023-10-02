import { Review } from "@/api/interfacesAoi"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"

export const reviewAPI = createApi({
    reducerPath: "reviewAPI",
    tagTypes: ['Reviews'],
    baseQuery: fetchBaseQuery({ baseUrl: "https://6502dd6aa0f2c1f3faeb0054.mockapi.io/api/" }),
    endpoints: (build) => ({
        fetchReviews: build.query<Review, string>({
            query: (id) => ({
                url: `/reviews/${id}`
            }),
            providesTags: (result, error, arg) => [{ type: 'Reviews', id: arg }]
        }),
        addReview: build.mutation({
            query: (review: Review) => ({
                url: `/reviews/${review.id}`,
                method: 'PUT',
                body: review,
            }),
            invalidatesTags: (result, error, { id }) => [{ type: "Reviews", id }]
        })
    })
})