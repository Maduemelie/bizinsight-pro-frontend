import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: 'adminApi',
  tagTypes: ['User', 'Products', 'Customers', 'Transactions'],

  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ['User'],
    }),
    getProduct: build.query({
      query: () => `client/products`,
      providesTags: ['Products'],
    }),
    getCustomer: build.query({
      query: () => 'client/customers',
      providesTags: ['Customers'],
    }),
    getTransactions: build.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: 'client/transactions',
        method: 'GET',
        params: { page, pageSize, sort, search },
      }),
      providesTags: ['Transactions'],
    }),
    getGeography: build.query({
      query: () => 'client/geography',
      providesTags: ['Geography'],
    }),
  }),
});
 export const { useGetUserQuery, useGetProductQuery, useGetCustomerQuery, useGetTransactionsQuery } = api;
