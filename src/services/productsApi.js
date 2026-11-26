import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../apiBaseUrl";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
      // Backend contract: GET /api/products returns a plain product array.
      transformResponse: (response) => Array.isArray(response) ? response : [],
      providesTags: (products) => [
        { type: "Product", id: "LIST" },
        ...(products || []).map(({ id }) => ({ type: "Product", id: String(id) })),
      ],
    }),
    getProduct: builder.query({
      query: (id) => `/products/${encodeURIComponent(String(id))}`,
      providesTags: (product, error, id) => [
        { type: "Product", id: String(product?.id ?? id) },
      ],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = productsApi;
