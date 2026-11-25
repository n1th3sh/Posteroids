import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Backend context path is /api. Locally, an empty base URL uses the CRA proxy
// (package.json) to forward requests to http://localhost:8080.
const baseUrl = (process.env.REACT_APP_API_BASE_URL || "").replace(/\/$/, "");

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/api/products",
      // Backend contract: GET /api/products returns a plain product array.
      transformResponse: (response) => Array.isArray(response) ? response : [],
      providesTags: (products) => [
        { type: "Product", id: "LIST" },
        ...(products || []).map(({ id }) => ({ type: "Product", id: String(id) })),
      ],
    }),
    getProduct: builder.query({
      query: (id) => `/api/products/${encodeURIComponent(String(id))}`,
      providesTags: (product, error, id) => [
        { type: "Product", id: String(product?.id ?? id) },
      ],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = productsApi;
